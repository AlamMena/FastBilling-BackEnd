import { Router } from "express";
import ProductController from "../Controllers/CompanyController";

const router = Router();

router.route('/products').get((...args) => { ProductController.GetAsync(...args) });
router.route('/product').get((...args) => { ProductController.GetByIdAsync(...args) });
router.route('/product').post((...args) => { ProductController.CreateAsync(...args) });
router.route('/product').put((...args) => { ProductController.UpdateAsync(...args) });
router.route('/product').delete((...args) => { ProductController.DeleteAsync(...args) });

export default router;