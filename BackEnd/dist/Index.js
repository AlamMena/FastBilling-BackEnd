"use strict";
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
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
mongoose_1.default.connect((_a = process.env.FAST_BILLING_PRODUCTION_URI) !== null && _a !== void 0 ? _a : "", function (res) {
    console.log('connected');
});
app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// // app.all("*", AuthorizationHandler);
app.use('/api/v1/', CompanyRoutes_1.default);
app.use('/api/v1/', ProductRoutes_1.default);
app.use('/api/v1/', BrandRoutes_1.default);
app.use('/api/v1/', CategoryRoutes_1.default);
