import { Schema } from "mongoose";

const CoreEntity = new Schema({
    isDeleted: Boolean,
});

export default CoreEntity;