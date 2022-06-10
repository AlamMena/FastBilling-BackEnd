"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = __importDefault(require("../Controllers/CompanyController"));
const router = (0, express_1.Router)();
router.route('/companies').get(CompanyController_1.default.GetAsync);
exports.default = router;
