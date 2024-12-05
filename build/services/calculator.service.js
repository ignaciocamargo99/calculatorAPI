"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorService = calculatorService;
const operations_utils_1 = require("../utils/operations.utils");
function calculatorService(expression) {
    while (expression.includes('(')) {
        expression = expression.replace(/\(([^()]+)\)/g, (_, inner) => (0, operations_utils_1.evaluateExpression)((0, operations_utils_1.tokenize)(inner)).toString());
    }
    return (0, operations_utils_1.evaluateExpression)((0, operations_utils_1.tokenize)(expression));
}
