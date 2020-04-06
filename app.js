const express = require("express");
const app = express();
var bodyparser = require('body-parser')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

const chalk = require('chalk');


//routes
app.get("/", function(req, res){
  console.log(chalk.blue('render succeeded') + chalk.red('!'));
  res.render("index.ejs"); 
});

app.get("/c", function(req, res){
    console.log(chalk.blue('render succeeded') + chalk.red('!'));
    res.render("C++.ejs"); 
});

app.get("/java", function(req, res) {
    console.log(chalk.blue('render succeeded') + chalk.red('!'));
    res.render("Java.ejs"); 
});

app.get("/python", function(req, res){
    console.log(chalk.blue('render succeeded') + chalk.red('!'));
    res.render("Python.ejs"); 
});

app.get("*", function(req,res){
    res.send("Page not found");
    res.render("error");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});