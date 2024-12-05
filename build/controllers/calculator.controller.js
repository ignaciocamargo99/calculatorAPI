"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorController = calculatorController;
const calculator_service_1 = require("../services/calculator.service");
function calculatorController(req, res) {
    const { operation } = req.body;
    if (operation === undefined || typeof operation !== 'string') {
        const errorResponse = { error: "Invalid or missing 'expression'" };
        return res.status(400).json(errorResponse);
    }
    try {
        const result = (0, calculator_service_1.calculatorService)(operation);
        return res.json({ result });
    }
    catch (error) {
        const errorResponse = { error: error.message };
        return res.status(400).json(errorResponse);
    }
}
