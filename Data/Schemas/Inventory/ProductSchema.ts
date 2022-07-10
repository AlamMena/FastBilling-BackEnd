import mongoose, { Schema } from "mongoose";
//@ts-ignore
import Inc from 'mongoose-sequence';
import CoreEntity from "../../Core/CoreModel";

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    images: { type: Array },
    price: { type: Number },
    cost: { type: Number },
    tax: { type: Number, default: 0 },
    benefit: { type: Number },
    sold: { type: Number, default: 0 },
    bought: { type: Number, default: 0 },
    categoryId: { type: Number },


    // 
    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String }

});


export default ProductSchema;