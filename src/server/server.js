import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

let publicPath = path.join(__dirname, '../public');
// console.log(publicPath);

app.use(bodyParser());

app.use(express.static(publicPath));
app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
