
import express from 'express';
import { Request, Response } from 'express';
import { CoreController } from './CoreController';

const app = express();

export class CompanyController extends CoreController<Company>{

}