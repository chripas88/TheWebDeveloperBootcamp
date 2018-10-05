var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thing : thing});
});

app.get("/posts", function(req, res){
    var posts = [
            {title: "Post 1", author: "Panos"},
            {title: "Post 2", author: "Makis"},
            {title: "Post 3", author: "Lakis"}
        ]
    res.render("posts", {posts : posts});
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started. IP: " + process.env.IP + ", PORT: " + process.env.PORT);
});