"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Company = new mongoose_1.Schema({
    Name: String,
    Identification: String,
    Adderess: String,
    PhoneNumber: String
});
