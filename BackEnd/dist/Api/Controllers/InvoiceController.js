"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreController_1 = require("./CoreController");
const InvoiceSchema_1 = __importDefault(require("../../Data/Schemas/Invoices/InvoiceSchema"));
class InvoiceController extends CoreController_1.CoreController {
    constructor(modelSchema, collectionName) {
        super(modelSchema, collectionName);
    }
}
exports.default = new InvoiceController(InvoiceSchema_1.default, 'invoices');
