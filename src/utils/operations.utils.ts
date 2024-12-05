import { OPERATORS, PRIORITY } from './constants.utils'

// Tokeniza una cadena en números y operadores
export function tokenize (expression: string): string[] {
  return expression
    .replace(/\s+/g, '') // Elimina espacios
    .split(/([+\-*/()])/) // Divide por operadores y paréntesis
    .filter((token) => token.length > 0) // Elimina tokens vacíos
}

// Aplica un operador entre dos números
export function applyOperator (a: number, b: number, operator: string): number {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) throw new Error('Division by zero')
      return a / b
    default:
      throw new Error(`Invalid operator: ${operator}`)
  }
}

export function evaluateExpression (tokens: string[]): number {
  const stack: number[] = []
  const operatorStack: string[] = []

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token))
    } else if (OPERATORS.includes(token)) {
      handleOperator(token, stack, operatorStack)
    }
  }

  processRemainingOperators(stack, operatorStack)

  if (stack.length !== 1) {
    throw new Error('Invalid expression: leftover operands.')
  }

  return stack[0]
}

function handleOperator (token: string, stack: number[], operatorStack: string[]): void {
  while (
    operatorStack.length > 0 &&
      PRIORITY[operatorStack[operatorStack.length - 1]] >= PRIORITY[token]
  ) {
    processTopOperator(stack, operatorStack)
  }
  operatorStack.push(token)
}

function processTopOperator (stack: number[], operatorStack: string[]): void {
  if (operatorStack.length === 0) {
    throw new Error('Operator stack is empty.')
  }

  const operator = operatorStack.pop()
  if (stack.length < 2) {
    throw new Error('Invalid expression: not enough operands.')
  }

  const b = stack.pop()
  const a = stack.pop()

  if (a === undefined || b === undefined) {
    throw new Error('Invalid expression: not enough operands in the stack.')
  }

  stack.push(applyOperator(a, b, operator as string))
}

function processRemainingOperators (stack: number[], operatorStack: string[]): void {
  while (operatorStack.length > 0) {
    processTopOperator(stack, operatorStack)
  }
}
