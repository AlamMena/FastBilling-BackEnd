import { Schema } from "mongoose";

const BrandSchema = new Schema({
    Name: { type: String, required: true },
    
    IsDeleted: { type: Boolean },

    CreatedAt: { type: Date },
    CreatedBy: { type: String },

    UpdatedAt: { type: Date },
    UpdatedBy: { type: String },


});

export default BrandSchema;