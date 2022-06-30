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
                const model = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
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
                const entities = yield model.find().skip((page - 1) * limit).limit(limit);
                if (entities.length === 0) {
                    return res.status(204).send([]);
                }
                return res.status(200).send(entities);
            }
            catch (error) {
                return res.status(500).send({ message: 'An error has ocurred' });
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
                entity.CreatedAt = Date.now;
                entity.CreatedBy = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // add user id
                yield entity.save();
                return res.status(201).send();
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    UpdateAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.body;
                if (_id === undefined) {
                    return res.status(404).send({ message: "Resource not found" });
                }
                const model = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
                const response = yield model.updateOne({ _id: _id }, { $set: req.body });
                return res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                return res.status(400).send(error);
            }
        });
    }
    DeleteAsync(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id === undefined) {
                    return res.status(404).send({ message: "Resource not found" });
                }
                const model = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
                const data = { IsDeleted: true, UpdatedBy: (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1], UpdatedAt: Date.now };
                const response = yield model.updateOne({ _id: id }, { $set: data });
                return res.status(200).send(response);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    GetByIdAsync(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = mongoose_1.default.model(this.CollectionName, this.ModelSchema);
            const { id } = req.query;
            const item = model.find({ id: id });
            if (item === null) {
                res.status(404).send({ message: 'Resource not found' });
            }
            return res.status(200).send(item);
        });
    }
}
exports.CoreController = CoreController;
