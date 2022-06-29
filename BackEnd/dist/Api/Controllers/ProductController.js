"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductSchema_1 = __importDefault(require("../../Data/Schemas/ProductSchema"));
const CoreController_1 = require("./CoreController");
class ProductController extends CoreController_1.CoreController {
    constructor(modelSchema, collectionName) {
        super(modelSchema, collectionName);
    }
}
exports.default = new ProductController(ProductSchema_1.default, 'Products');
