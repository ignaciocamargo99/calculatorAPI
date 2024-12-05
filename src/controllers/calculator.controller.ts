import { Request, Response } from 'express'
import { calculatorService } from '../services/calculator.service'
import { CalculatorRequest, ErrorResponse } from '../types/calculator.d'

export function calculatorController (req: Request, res: Response): any {
  const { operation }: CalculatorRequest = req.body

  if (operation === undefined || typeof operation !== 'string') {
    const errorResponse: ErrorResponse = { error: "Invalid or missing 'expression'" }
    return res.status(400).json(errorResponse)
  }

  try {
    const result = calculatorService(operation)
    return res.json({ result })
  } catch (error: any) {
    const errorResponse: ErrorResponse = { error: error.message }
    return res.status(400).json(errorResponse)
  }
}
