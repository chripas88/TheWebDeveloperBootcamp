var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Bye!!!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/r/:subReddit", function(req, res){
    res.send("Welcome to subReddit " + req.params.subReddit);
});

app.get("*", function(req, res){
    res.send("You are a star");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started. IP: " + process.env.IP + ", PORT: " + process.env.PORT);
});