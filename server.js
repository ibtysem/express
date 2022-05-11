const expresse = require("express");
const app= expresse();


app.use('/user',require('./routes/user'));
app.listen(5000,(err)=>{
    err? console.log(err):console.log("serveur yekhdem...");
});