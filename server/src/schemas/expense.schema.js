import { z } from 'zod'

export const createExpenseSchema = z.object({
  amount: z.number().positive('Amount must be greater than 0'),
  description: z.string().min(1, 'Description is required'),
  categoryId: z.number().int().optional().nullable(),
  date: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    'Date must be a valid ISO string (YYYY-MM-DD)'
  ),
})

export const updateExpenseSchema = z.object({
  amount: z.number().positive().optional(),
  description: z.string().min(1).optional(),
  categoryId: z.number().int().optional().nullable(),
  date: z.string().optional(),
})

export const getExpensesSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  categoryId: z.coerce.number().int().optional(),
})
