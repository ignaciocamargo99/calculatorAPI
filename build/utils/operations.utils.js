"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = tokenize;
exports.applyOperator = applyOperator;
exports.evaluateExpression = evaluateExpression;
const constants_utils_1 = require("./constants.utils");
// Tokeniza una cadena en números y operadores
function tokenize(expression) {
    return expression
        .replace(/\s+/g, '') // Elimina espacios
        .split(/([+\-*/()])/) // Divide por operadores y paréntesis
        .filter((token) => token.length > 0); // Elimina tokens vacíos
}
// Aplica un operador entre dos números
function applyOperator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0)
                throw new Error('Division by zero');
            return a / b;
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}
function evaluateExpression(tokens) {
    const stack = [];
    const operatorStack = [];
    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
        }
        else if (constants_utils_1.OPERATORS.includes(token)) {
            handleOperator(token, stack, operatorStack);
        }
    }
    processRemainingOperators(stack, operatorStack);
    if (stack.length !== 1) {
        throw new Error('Invalid expression: leftover operands.');
    }
    return stack[0];
}
function handleOperator(token, stack, operatorStack) {
    while (operatorStack.length > 0 &&
        constants_utils_1.PRIORITY[operatorStack[operatorStack.length - 1]] >= constants_utils_1.PRIORITY[token]) {
        processTopOperator(stack, operatorStack);
    }
    operatorStack.push(token);
}
function processTopOperator(stack, operatorStack) {
    if (operatorStack.length === 0) {
        throw new Error('Operator stack is empty.');
    }
    const operator = operatorStack.pop();
    if (stack.length < 2) {
        throw new Error('Invalid expression: not enough operands.');
    }
    const b = stack.pop();
    const a = stack.pop();
    if (a === undefined || b === undefined) {
        throw new Error('Invalid expression: not enough operands in the stack.');
    }
    stack.push(applyOperator(a, b, operator));
}
function processRemainingOperators(stack, operatorStack) {
    while (operatorStack.length > 0) {
        processTopOperator(stack, operatorStack);
    }
}
