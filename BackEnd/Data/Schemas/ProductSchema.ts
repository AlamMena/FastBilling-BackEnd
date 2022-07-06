import mongoose, { Schema } from "mongoose";
//@ts-ignore
import Inc from 'mongoose-sequence';
import CoreEntity from "../Core/CoreModel";
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    images: { type: Array },
    price: { type: Number },
    cost: { type: Number },
    benefit: { type: Number },
    sold: { type: Number, default: 0 },
    bought: { type: Number, default: 0 },

    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String }

});
ProductSchema.plugin(AutoIncrement, { id: 'id' })
export default ProductSchema;