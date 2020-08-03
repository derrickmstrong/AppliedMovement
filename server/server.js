const express = require('express');
const path = require('path');

const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

let publicPath = path.resolve(__dirname,'..')+'/Public';
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json())


// api

app.use('/api',require('./routes/api'));

app.get('/', (req,res)=>{
    res.sendFile('index.html')
})

app.listen(PORT, ()=> {
    console.log('app running at http://localhost:'+PORT);
})