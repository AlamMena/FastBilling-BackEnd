"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompanySchema_1 = __importDefault(require("../../Data/Schemas/System/CompanySchema"));
const CoreController_1 = require("./CoreController");
class CompanyController extends CoreController_1.CoreController {
    constructor(modelSchema, collectionName) {
        super(modelSchema, collectionName);
    }
}
exports.default = new CompanyController(CompanySchema_1.default, 'companies');
