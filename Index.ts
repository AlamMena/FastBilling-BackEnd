import express from "express";
import dotenv from 'dotenv'
import AuthorizationHandler from "./Middlewares/AuthenticationMiddleware";
import CompanyRoutes from "./Api/Routes/CompanyRoutes"
import ProductRoutes from "./Api/Routes/ProductRoutes"
import CategoryRoutes from "./Api/Routes/CategoryRoutes"
import BrandRoutes from "./Api/Routes/BrandRoutes"
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser';
import { TIMEOUT } from "dns";
import ProductSchema from "./Data/Schemas/Inventory/ProductSchema";
import * as mongooseAutoIncrement from 'mongoose-auto-increment'
import InvoiceRoutes from "./Api/Routes/InvoiceRoutes";
import InvoiceSchema from "./Data/Schemas/Invoices/InvoiceSchema";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.FAST_BILLING_PRODUCTION_URI ?? "", function (res) {
    console.log('connected to mongodb');
});


// auto increments
mongooseAutoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Products', field: 'id' })
InvoiceSchema.plugin(mongooseAutoIncrement.plugin, { model: 'invoices', field: 'id' })


app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
app.get('', (req, res) => { res.send('here') })

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

// // app.all("*", AuthorizationHandler);

app.use('/api/v1/', CompanyRoutes);
app.use('/api/v1/', ProductRoutes);
app.use('/api/v1/', BrandRoutes);
app.use('/api/v1/', CategoryRoutes);
app.use('/api/v1/', InvoiceRoutes);


module.exports = app;





