var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

var url = "http://omdbapi.com/?apikey=thewdb";
var addparam = "&s=";

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var search = req.query.search;
    var completeURL = url + addparam + search;
    request(completeURL, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data : data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});