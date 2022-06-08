import express  from "express";
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('My Server');
});

app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
