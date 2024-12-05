import { tokenize, evaluateExpression } from '../utils/operations.utils'

export function calculatorService (expression: string): number {
  while (expression.includes('(')) {
    expression = expression.replace(/\(([^()]+)\)/g, (_, inner) =>
      evaluateExpression(tokenize(inner)).toString()
    )
  }
  return evaluateExpression(tokenize(expression))
}
