const express = require("express");

const app = express();

const publicpath = "/Users/saurabhupadhyay/Desktop/Tools/git/expressjs/public";
app.set("view engine" , "hbs");


// app.use(express.static(publicpath));
app.get("",(req,res) =>{
    app.render('index.hbs');
});
app.get("/",(req,res) => {
    res.send("hellow from the server");

});


app.listen(7000,() =>{
    console.log("server is runnig ");
})