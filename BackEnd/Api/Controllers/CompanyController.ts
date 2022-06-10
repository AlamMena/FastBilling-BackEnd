
import { NextFunction, Response, Request } from 'express';
import CompanySchema from '../../Data/Schemas/CompanySchema';
import { Error } from 'mongoose'
import { ErrorResponse } from '../../Exceptions/ValidationHandler';
import { CoreController } from './CoreController';

class CompanyController extends CoreController {
    constructor() {
        super(CompanySchema, 'Companies')
    }

}
export default new CompanyController();