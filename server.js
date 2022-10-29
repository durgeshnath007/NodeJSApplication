const express = require('express');

const app = express();

const PORT = 8080;


app.get('/',(req,res)=> {
    res.status(200).sendFile(__dirname+'/Website/index.html');
});

app.listen(
    PORT,() => console.log(`Its alive on http://localhost:${PORT}`)
);