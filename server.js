const app = require('express')();
const PORT = 8080;

app.get('/',(req,res)=> {
    res.status(200).sendFile(__dirname+'/Pages/index.html');
});

app.listen(
    PORT,() => console.log(`Its alive on http://localhost:${PORT}`)
);