"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const express_1 = __importDefault(require("express"));
const CoreController_1 = require("./CoreController");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const app = (0, express_1.default)();
class CompanyController extends CoreController_1.CoreController {
    GetMongoose(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect('mongodb+srv://Alam:Alam2701@cluster0.cf05i1x.mongodb.net/Fast-Billing');
            const companySchema = new mongoose_2.Schema({
                Name: String
            });
            const company = mongoose_1.default.model('Companies', companySchema);
            const firstCompany = new company({ Name: 'My New company' });
            const response = yield firstCompany.save();
            const companies = yield company.find();
            res.send(companies);
        });
    }
}
exports.CompanyController = CompanyController;
