import express from "express";
import dotenv from 'dotenv'
import AuthorizationHandler from "./Middlewares/AuthenticationMiddleware";
import CompanyRoutes from "./Api/Routes/CompanyRoutes"
import ProductRoutes from "./Api/Routes/ProductRoutes"
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import { TIMEOUT } from "dns";


dotenv.config();
const app = express();
const PORT = 8080;

mongoose.connect(process.env.FAST_BILLING_PRODUCTION_URI ?? "", function (res) {
    console.log('connected');
});

app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.all("*", AuthorizationHandler);

app.use('/api/v1/', CompanyRoutes);
app.use('/api/v1/', ProductRoutes);



