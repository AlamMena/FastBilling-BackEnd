import {  Schema } from 'mongoose'
import { CoreController } from './CoreController';
import CategorySchema from '../../Data/Schemas/Inventory/CategorySchema';

class CategoryController extends CoreController {
    constructor(modelSchema: Schema, collectionName: string) {
        super(modelSchema, collectionName)
    }

}
export default new CategoryController(CategorySchema,'categories');