
import { NextFunction, Response, Request } from 'express';
import CompanySchema from '../../Data/Schemas/System/CompanySchema';
import { Error, Schema } from 'mongoose'
import { ErrorResponse } from '../../Exceptions/ValidationHandler';
import { CoreController } from './CoreController';

class CompanyController extends CoreController {
    constructor(modelSchema: Schema, collectionName: string) {
        super(modelSchema, collectionName)
    }

}
export default new CompanyController(CompanySchema,'companies');