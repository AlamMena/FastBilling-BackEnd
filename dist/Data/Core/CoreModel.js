"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CoreEntity = new mongoose_1.Schema({
    isDeleted: Boolean,
});
exports.default = CoreEntity;
