import { Router } from 'express'
import { calculatorController } from '../controllers/calculator.controller'

const router = Router()

router.post('/calculate', calculatorController)

export default router
