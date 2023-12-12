const express = require('express');
const app = express();
const fs = require('fs');

const userData = fs.readFileSync('./data.json');
const users  = JSON.parse(userData);

app.get('/users', (req, res) =>{
    res.send(users);
});

app.listen(3000 , ()=>{
    console.log("server işlədi");
})