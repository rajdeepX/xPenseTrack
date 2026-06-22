import pool from '../config/db.js'

export async function createExpense(req, res) {
  const { amount, description, categoryId, date } = req.body
  const userId = req.user.userId

  try {
    const result = await pool.query(
      `INSERT INTO expenses (user_id, category_id, amount, description, date)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, amount, description, category_id, date, created_at`,
      [userId, categoryId || null, amount, description, date]
    )

    res.status(201).json({
      message: 'Expense created',
      expense: result.rows[0],
    })
  } catch (err) {
    console.error('Create expense error:', err)
    res.status(500).json({ error: 'Failed to create expense' })
  }
}

export async function getExpenses(req, res) {
  const userId = req.user.userId
  const { startDate, endDate, categoryId } = req.query

  try {
    let query = 'SELECT * FROM expenses WHERE user_id = $1'
    const params = [userId]
    let paramIndex = 2

    if (startDate) {
      query += ` AND date >= $${paramIndex}`
      params.push(startDate)
      paramIndex++
    }

    if (endDate) {
      query += ` AND date <= $${paramIndex}`
      params.push(endDate)
      paramIndex++
    }

    if (categoryId) {
      query += ` AND category_id = $${paramIndex}`
      params.push(categoryId)
      paramIndex++
    }

    query += ' ORDER BY date DESC'

    const result = await pool.query(query, params)
    res.status(200).json({
      expenses: result.rows,
      count: result.rows.length,
    })
  } catch (err) {
    console.error('Get expenses error:', err)
    res.status(500).json({ error: 'Failed to fetch expenses' })
  }
}

export async function getExpenseById(req, res) {
  const { id } = req.params
  const userId = req.user.userId

  try {
    const result = await pool.query(
      'SELECT * FROM expenses WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Expense not found' })
    }

    res.status(200).json({ expense: result.rows[0] })
  } catch (err) {
    console.error('Get expense error:', err)
    res.status(500).json({ error: 'Failed to fetch expense' })
  }
}

export async function updateExpense(req, res) {
  const { id } = req.params
  const userId = req.user.userId
  const { amount, description, categoryId, date } = req.body

  try {
    // Check ownership first
    const ownership = await pool.query(
      'SELECT id FROM expenses WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (ownership.rows.length === 0) {
      return res.status(403).json({ error: 'You can only edit your own expenses' })
    }

    // Build dynamic update query
    const updates = []
    const params = []
    let paramIndex = 1

    if (amount !== undefined) {
      updates.push(`amount = $${paramIndex}`)
      params.push(amount)
      paramIndex++
    }
    if (description !== undefined) {
      updates.push(`description = $${paramIndex}`)
      params.push(description)
      paramIndex++
    }
    if (categoryId !== undefined) {
      updates.push(`category_id = $${paramIndex}`)
      params.push(categoryId || null)
      paramIndex++
    }
    if (date !== undefined) {
      updates.push(`date = $${paramIndex}`)
      params.push(date)
      paramIndex++
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`)

    if (updates.length === 1) {
      return res.status(400).json({ error: 'No fields to update' })
    }

    params.push(id)
    params.push(userId)

    const result = await pool.query(
      `UPDATE expenses SET ${updates.join(', ')}
       WHERE id = $${paramIndex} AND user_id = $${paramIndex + 1}
       RETURNING *`,
      params
    )

    res.status(200).json({
      message: 'Expense updated',
      expense: result.rows[0],
    })
  } catch (err) {
    console.error('Update expense error:', err)
    res.status(500).json({ error: 'Failed to update expense' })
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params
  const userId = req.user.userId

  try {
    const result = await pool.query(
      'DELETE FROM expenses WHERE id = $1 AND user_id = $2 RETURNING id',
      [id, userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Expense not found or not yours' })
    }

    res.status(200).json({ message: 'Expense deleted' })
  } catch (err) {
    console.error('Delete expense error:', err)
    res.status(500).json({ error: 'Failed to delete expense' })
  }
}
