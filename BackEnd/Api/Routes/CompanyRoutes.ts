import { Router } from "express";
import CompanySchema from "../../Data/Schemas/CompanySchema";
import CompanyController from "../Controllers/CompanyController";

const router = Router();

router.route('/companies').get(CompanyController.GetAsync);

export default router;