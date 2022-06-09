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
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = __importDefault(require("./Middlewares/AuthMiddleware"));
const CompanyRoutes_1 = __importDefault(require("./Api/Routes/CompanyRoutes"));
const app = (0, express_1.default)();
const PORT = 8080;
app.all("*", AuthMiddleware_1.default);
app.use('/api/v1/companies', CompanyRoutes_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('Ok');
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
