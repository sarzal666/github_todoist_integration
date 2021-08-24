require('dotenv').config();
const express = require("express");
const axios = require("axios");
const path = require('path');


const app = express();

app.get('/', (req,res) => {

    const tpl = path.resolve('dist/index.html');
    res.sendFile(tpl);

}),


app.listen(3000);

