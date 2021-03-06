"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const CompanyRoutes_1 = __importDefault(require("./Api/Routes/CompanyRoutes"));
const ProductRoutes_1 = __importDefault(require("./Api/Routes/ProductRoutes"));
const CategoryRoutes_1 = __importDefault(require("./Api/Routes/CategoryRoutes"));
const BrandRoutes_1 = __importDefault(require("./Api/Routes/BrandRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const ProductSchema_1 = __importDefault(require("./Data/Schemas/Inventory/ProductSchema"));
const mongooseAutoIncrement = __importStar(require("mongoose-auto-increment"));
const InvoiceRoutes_1 = __importDefault(require("./Api/Routes/InvoiceRoutes"));
const InvoiceSchema_1 = __importDefault(require("./Data/Schemas/Invoices/InvoiceSchema"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
mongoose_1.default.connect((_a = process.env.FAST_BILLING_PRODUCTION_URI) !== null && _a !== void 0 ? _a : "", function (res) {
    console.log('connected to mongodb');
});
// auto increments
mongooseAutoIncrement.initialize(mongoose_1.default.connection);
ProductSchema_1.default.plugin(mongooseAutoIncrement.plugin, { model: 'Products', field: 'id' });
InvoiceSchema_1.default.plugin(mongooseAutoIncrement.plugin, { model: 'invoices', field: 'id' });
app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
app.get('', (req, res) => { res.send('here'); });
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// // app.all("*", AuthorizationHandler);
app.use('/api/v1/', CompanyRoutes_1.default);
app.use('/api/v1/', ProductRoutes_1.default);
app.use('/api/v1/', BrandRoutes_1.default);
app.use('/api/v1/', CategoryRoutes_1.default);
app.use('/api/v1/', InvoiceRoutes_1.default);
module.exports = app;
