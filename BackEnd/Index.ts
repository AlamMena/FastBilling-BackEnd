import express from "express";
import AuthorizationHandler from "./Middlewares/AuthMiddleware";
import CompanyRoutes from "./Api/Routes/CompanyRoutes"

const app = express();
const PORT = 8080;

app.all("*", AuthorizationHandler);

app.use('/api/v1/companies', CompanyRoutes);

app.get('/', async (req, res) => {

    try {

        res.send('Ok');

    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
