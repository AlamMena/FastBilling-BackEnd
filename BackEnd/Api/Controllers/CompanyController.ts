
import express from 'express';
import { Request, Response } from 'express';
import { CoreController } from './CoreController';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const app = express();

export class CompanyController extends CoreController<Company>{


    async GetMongoose(req:Request,res:Response) {
        await mongoose.connect('mongodb+srv://Alam:Alam2701@cluster0.cf05i1x.mongodb.net/Fast-Billing')
        const companySchema = new Schema({
            Name:String
        })

        const company = mongoose.model('Companies', companySchema);
        const firstCompany = new company({ Name: 'My New company' });
        const response = await firstCompany.save();
        const companies = await company.find();
        res.send(companies);


    }
}