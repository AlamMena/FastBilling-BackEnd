import mongoose, { Schema } from "mongoose";
import CoreEntity from "../Core/CoreModel";

const CompanySchema = new Schema({
    Name: { type: String, required: true },
    Identification: { type: String, required: true },
    Adderess: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    IsDeleted: { type: Boolean }
});

// const CompanyDAO = mongoose.model('Companies', CompanySchema);

export default CompanySchema;