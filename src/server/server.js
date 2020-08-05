import * as express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import * as path from "path";
import apiRouter from "./src/server/routes/index.js"
const dotenv = require('dotenv').config({ path: './config/config.env' });

const app = express();
const PORT = 3000;

let publicPath = path.resolve(__dirname, '..') + '/Public';
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json())


// api
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, () => {
    console.log('app running at http://localhost:' + PORT);
})