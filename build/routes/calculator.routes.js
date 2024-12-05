"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calculator_controller_1 = require("../controllers/calculator.controller");
const router = (0, express_1.Router)();
router.post('/calculate', calculator_controller_1.calculatorController);
exports.default = router;
