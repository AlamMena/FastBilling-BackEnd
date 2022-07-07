import { Schema } from "mongoose";

const InvoiceSchema = new Schema({

    companyId: { type: Number },
    branchId: { type: Number },
    invoiceTypeId: { type: Number },

    // contactInfo
    contactInfo: {
        contactId: { type: Number },
        contactName: { type: String },
        contactIdentificationNo: { type: String }
    },

    // totals
    subTotal: { type: Number, default: 0 },
    disccountAmount: { type: Number, default: 0 },
    taxesAmount: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    totalPayed: { type: Number, default: 0 },

    NCF: { type: String },
    NCFExpirationDate: { type: Date },

    details: [{
        name: { type: String },
        productId: { type: Number },
        quantity: { type: Number, default: 0 },
        cost: { type: Number, default: 0 },
        originalPrice: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
        taxes: { type: Boolean },
        taxesAmount: { type: Number, default: 0 },
        subTotal: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    }],

    // default
    IsDeleted: { type: Boolean },
    CreatedAt: { type: Date },
    CreatedBy: { type: String },
    UpdatedAt: { type: Date },
    UpdatedBy: { type: String },

})

export default InvoiceSchema;