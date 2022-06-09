"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = require("../Controllers/CompanyController");
const companyController = new CompanyController_1.CompanyController();
const router = (0, express_1.Router)();
router.route('/').get(companyController.CreateAsync);
exports.default = router;
