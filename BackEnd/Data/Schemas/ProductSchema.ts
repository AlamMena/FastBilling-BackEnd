import mongoose, { Schema } from "mongoose";
import CoreEntity from "../Core/CoreModel";

const ProductSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String },
    ImageUrl: { type: String },
    Price: { type: Number },
    Cost: { type: Number },

    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String },


});

export default ProductSchema;