import { Router } from "express";
import CompanySchema from "../../Data/Schemas/CompanySchema";
import CompanyController from "../Controllers/CompanyController";

const router = Router();

router.route('/companies').get((...args) => { CompanyController.GetAsync(...args) });
router.route('/companies').get((...args) => { CompanyController.GetByIdAsync(...args) });
router.route('/company').post((...args) => { CompanyController.CreateAsync(...args) });
router.route('/companies').put((...args) => { CompanyController.UpdateAsync(...args) });
router.route('/companies').delete((...args) => { CompanyController.DeleteAsync(...args) });

export default router;