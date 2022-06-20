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
exports.CoreController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ValidationHandler_1 = require("../../Exceptions/ValidationHandler");
class CoreController {
    constructor(modelSchema, collectionName) {
        this.CollectionName = collectionName;
        this.ModelSchema = modelSchema;
    }
    GetAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
                // getting values
                const page = parseInt(req.query.page);
                const limit = parseInt(req.query.limit);
                if (!page) {
                    const error = new ValidationHandler_1.ErrorResponse('Invalid page', 400);
                    return res.status(400).send(error);
                }
                if (!limit) {
                    const error = new ValidationHandler_1.ErrorResponse('Invalid limit', 400);
                    return res.status(400).send(error);
                }
                const companies = yield entity.find().skip((page - 1) * limit).limit(limit);
                if (companies.length === 0) {
                    return res.status(204).send([]);
                }
                return res.status(200).send(companies);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    CreateAsync(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
                const entity = new model(req.body);
                // default data
                entity.IsDeleted = false;
                entity.CreatedAt = new Date().getDate();
                entity.CreatedBy = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
                yield entity.save();
                return res.status(201).send();
            }
            catch (error) {
                console.log(error);
                return res.status(400).send(error);
            }
        });
    }
    UpdateAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(404);
        });
    }
    DeleteAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(404);
        });
    }
    GetByIdAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(404);
        });
    }
}
exports.CoreController = CoreController;
