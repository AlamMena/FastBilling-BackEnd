"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreController = void 0;
class CoreController {
    CreateAsync(req, res) {
        return res.send({ repository: "my repo" });
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
