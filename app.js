const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
   res.render("index.html"); 
});

// app.get("/c++", function(req, res){
//    res.render("C++.html"); 
// });

// app.get("/java", function(req, res) {
//    res.render("Java.html"); 
// });

// app.get("/python", function(req, res){
//    res.render("Python.html"); 
// });

app.listen("8080", "127.0.0.1", function(){
    console.log("Running Express Server...");
});