import { Router } from "express";
import InvoiceController from "../Controllers/InvoiceController";

const router = Router();

router.route('/invoices').get((...args) => { InvoiceController.GetAsync(...args) });
router.route('/invoice').get((...args) => { InvoiceController.GetByIdAsync(...args) });
router.route('/invoice').post((...args) => { InvoiceController.CreateAsync(...args) });
router.route('/invoice').put((...args) => { InvoiceController.UpdateAsync(...args) });
router.route('/invoice').delete((...args) => { InvoiceController.DeleteAsync(...args) });

export default router;