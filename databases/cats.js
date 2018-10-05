var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });
//mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the DB

// var newCat = new Cat({
//     name: "Mrs. Norris",
//     age: 11,
//     temperament: "Evil"
// });

// newCat.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     } else{
//         console.log("Cat saved to DB!");
//         console.log(cat);
//     }
// });

// Cat.create({
//     name: "Bob",
//     age: 9,
//     temperament: "messy"
// }, function(err, cat){
//     if(err){
//         console.log("Error creating cat");
//     } else {
//         console.log("\nCat created successfully");
//         console.log(cat);
//     }
// });



//retrieve a cat from the DB

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error!");
    } else{
        console.log("\nCats in DB");
        console.log(cats);
    }
});

