"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const express_1 = __importDefault(require("express"));
const CoreController_1 = require("./CoreController");
const app = (0, express_1.default)();
class CompanyController extends CoreController_1.CoreController {
}
exports.CompanyController = CompanyController;
