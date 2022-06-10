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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreController = void 0;
const ValidationHandler_1 = require("../../Exceptions/ValidationHandler");
class CoreController {
    constructor(modelSchema, collectionName) {
        this.CollectionName = collectionName;
        this.ModelSchema = modelSchema;
        console.log(this.CollectionName);
    }
    GetAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('s');
                console.log(this === null || this === void 0 ? void 0 : this.CollectionName);
                // const entity = mongoose.model(this.CollectionName, this.ModelSchema);
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
                // const companies = await entity.find().skip((page - 1) * limit).limit(limit);
                // if (companies.length === 0) {
                //     return res.status(204).send([]);
                // }
                return res.status(200).send('companies');
            }
            catch (error) {
                console.log(this.CollectionName);
                res.status(500).send(error);
            }
        });
    }
    CreateAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send({ repository: "my repo" });
        });
    }
    UpdateAsync(entity) {
        return new Promise(func => true);
    }
    DeleteAsync(id) {
        return new Promise(func => true);
    }
    GetByIdAsync(id) {
        return new Promise(func => true);
    }
}
exports.CoreController = CoreController;
