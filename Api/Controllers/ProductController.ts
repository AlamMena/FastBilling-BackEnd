
import ProductSchema from '../../Data/Schemas/Inventory/ProductSchema';
import { Schema } from 'mongoose'
import { CoreController } from './CoreController';

class ProductController extends CoreController {
    constructor(modelSchema: Schema, collectionName: string) {
        super(modelSchema, collectionName)
    }

}
export default new ProductController(ProductSchema, 'products');