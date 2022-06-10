import { Request, Response } from "express";
import mongoose, { model, Model, mongo, Schema } from "mongoose";
import CompanySchema from "../../Data/Schemas/CompanySchema";
import { ErrorResponse } from "../../Exceptions/ValidationHandler";


export class CoreController {

    private readonly ModelSchema: Schema
    private readonly CollectionName: string

    constructor(modelSchema: Schema, collectionName: string) {
        this.CollectionName = collectionName;
        this.ModelSchema = modelSchema;

        console.log(this.CollectionName);
    }


    async GetAsync(req: Request, res: Response) {
        try {

            console.log('s');
            console.log(this?.CollectionName)
            // const entity = mongoose.model(this.CollectionName, this.ModelSchema);

            // getting values
            const page: number = parseInt(req.query.page as string)
            const limit: number = parseInt(req.query.limit as string)

            if (!page) {
                const error = new ErrorResponse('Invalid page', 400)
                return res.status(400).send(error)
            }

            if (!limit) {
                const error = new ErrorResponse('Invalid limit', 400)
                return res.status(400).send(error)
            }

            // const companies = await entity.find().skip((page - 1) * limit).limit(limit);

            // if (companies.length === 0) {
            //     return res.status(204).send([]);
            // }

            return res.status(200).send('companies');

        } catch (error) {
            console.log(this.CollectionName);
            res.status(500).send(error);
        }

    }
    async CreateAsync(req: Request, res: Response) {
        return res.send({ repository: "my repo" })
    }
    UpdateAsync(entity: any): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

    DeleteAsync(id: string): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

    GetByIdAsync(id: string): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

}