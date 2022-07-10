import mongoose, { Schema } from "mongoose";
import CoreModel from "../../Core/CoreModel";

const CategorySchema = new Schema({
    Name: { type: String, required: true },

    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String },


});

export default CategorySchema;