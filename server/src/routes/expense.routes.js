import express from 'express'
import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from '../controllers/expense.controller.js'
import { authenticateToken } from '../middleware/auth.js'
import { validate } from '../middleware/validate.js'
import {
  createExpenseSchema,
  updateExpenseSchema,
  getExpensesSchema,
} from '../schemas/expense.schema.js'

const router = express.Router()

// All expense routes require authentication
router.use(authenticateToken)

router.post(
  '/',
  validate(createExpenseSchema),
  createExpense
)

router.get(
  '/',
  validate(getExpensesSchema),
  getExpenses
)

router.get('/:id', getExpenseById)

router.put(
  '/:id',
  validate(updateExpenseSchema),
  updateExpense
)

router.delete('/:id', deleteExpense)

export default router
