import { Router } from "express";
import { CompanyController } from "../Controllers/CompanyController"


const companyController = new CompanyController();
const router = Router();

router.route('/').get(companyController.GetMongoose);

export default router;