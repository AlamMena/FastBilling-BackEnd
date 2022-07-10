import { NextFunction, Request, Response } from "express";
import mongoose, { model, Model, mongo, Schema } from "mongoose";
import CompanySchema from "../../Data/Schemas/System/CompanySchema";
import { ErrorResponse } from "../../Exceptions/ValidationHandler";


export class CoreController {

    ModelSchema: Schema
    CollectionName: string;

    constructor(modelSchema: Schema, collectionName: string) {

        this.CollectionName = collectionName;
        this.ModelSchema = modelSchema;
    }

    async GetAsync(req: Request, res: Response, next: NextFunction) {

        try {

            const model = mongoose.model(this.CollectionName, this.ModelSchema);

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

            const entities = await model.find().skip((page - 1) * limit).limit(limit);

            if (entities.length === 0) {
                return res.status(204).send([]);
            }

            return res.status(200).send(entities);
        }
        catch (error) {
            return res.status(500).send({ message: 'An error has ocurred' })
        }
    }

    async CreateAsync(req: Request, res: Response, next: NextFunction) {

        try {

            const model = mongoose.model(this.CollectionName, this.ModelSchema);

            const entity = new model(req.body);

            // default data
            entity.IsDeleted = false;
            entity.CreatedAt = new Date().getDate();
            entity.CreatedBy = req.headers['authorization']?.split(' ')[1];// add user id

            await entity.save();

            return res.status(201).send(entity);

        } catch (error) {
            return res.status(400).send(error);
        }

    }
    async UpdateAsync(req: Request, res: Response, next: NextFunction) {

        try {

            const { _id } = req.body;

            if (_id === undefined) {
                return res.status(404).send({ message: "Resource not found" });
            }

            const model = mongoose.model(this.CollectionName, this.ModelSchema);

            const response = await model.updateOne({ _id: _id }, { $set: req.body });
            return res.status(200).send(response);

        } catch (error) {

            console.log(error);
            return res.status(400).send(error);
        }

    }

    async DeleteAsync(req: Request, res: Response, next: NextFunction) {

        try {

            const { id } = req.query;

            if (id === undefined) {
                return res.status(404).send({ message: "Resource not found" });
            }

            const model = mongoose.model(this.CollectionName, this.ModelSchema);

            const data = { IsDeleted: true, UpdatedBy: req.headers['authorization']?.split(' ')[1], UpdatedAt: new Date().getDate() }

            const response = await model.updateOne({ _id: id }, { $set: data });

            return res.status(200).send(response);

        } catch (error) {

            return res.status(400).send(error);
        }

    }

    async GetByIdAsync(req: Request, res: Response, next: NextFunction) {

        const model = mongoose.model(this.CollectionName, this.ModelSchema);
        const { id } = req.query;

        const item = model.find({ id: id });

        if (item === null) {
            res.status(404).send({ message: 'Resource not found' })
        }
        return res.status(200).send(item);
    }
}