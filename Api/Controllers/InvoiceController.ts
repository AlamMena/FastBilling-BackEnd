import { Schema } from "mongoose";
import { CoreController } from "./CoreController";
import InvoiceSchema from '../../Data/Schemas/Invoices/InvoiceSchema'

class InvoiceController extends CoreController {
    constructor(modelSchema: Schema, collectionName: string) {
        super(modelSchema, collectionName)
    }

}
export default new InvoiceController(InvoiceSchema, 'invoices');