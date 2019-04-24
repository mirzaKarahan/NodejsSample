var express = require('express');
var app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('This is sample nodejs and express package');
});

app.listen(port,console.log("Server is start"));