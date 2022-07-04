import mongoose, { Schema } from "mongoose";
import CoreEntity from "../Core/CoreModel";

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    cost: { type: Number },
    benefit: { type: Number },

    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String },


});

export default ProductSchema;