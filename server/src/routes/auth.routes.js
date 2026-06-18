import express from 'express'
import rateLimit from 'express-rate-limit'
import { register, login } from '../controllers/auth.controller.js'
import { validate } from '../middleware/validate.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = express.Router()

// Rate limit auth endpoints (max 5 requests per 15 minutes)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts, please try again later',
})

router.post('/register', authLimiter, validate(registerSchema), register)
router.post('/login', authLimiter, validate(loginSchema), login)

export default router
