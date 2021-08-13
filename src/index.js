require('dotenv').config();
const express = require("express");
const axios = require("axios");
const path = require('path');

const app = express();


app.get('/', (req,res) => {

    res.sendFile(path.resolve(__dirname,'index.html'));

});

app.get('/callback', (req,res) => {

    axios.post("https://github.com/login/oauth/access_token",{
        client_id : process.env.CLIENT_ID,
        client_secret : process.env.CLIENT_SECRET,
        code: req.query.code
        }
    
    ).then((response) => {
        res.send(response.data)
         console.log(response.data);
    }).catch(e => {
        res.send(e)
        console.log(e);
    })
     


});



app.listen(3000);

