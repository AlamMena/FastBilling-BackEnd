
import { Schema } from 'mongoose'
import { CoreController } from './CoreController';
import BrandSchema from '../../Data/Schemas/System/BrandSchema';

class BrandController extends CoreController {
    constructor(modelSchema: Schema, collectionName: string) {
        super(modelSchema, collectionName)
    }

}
export default new BrandController(BrandSchema, 'brands');