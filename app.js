var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(express.static(__dirname+"/client"));
app.use(bodyParser.json());


Movie = require("./models/movie");

// Connect to mongoose - Database
mongoose.connect("mongodb://localhost/moviesdb");
var db = mongoose.connection;

app.get("/", function(req, res){
    res.send("Please use /api/movies.");
});

// Get Movies

app.get("/api/movies", function (req, res){
    Movie.getMovies(function(err, movies){
        if(err) {
            throw err;
        }
        res.json(movies);
    });
});

// Get Movie

app.get("/api/movies/:_id", function (req, res){
    Movie.getMovieById(req.params._id, function(err, movie){
        if(err) {
            throw err;
        }
        res.json(movie);
    });
});

// Add Movie

app.post("/api/movies", function (req, res){
    var movie = req.body;
    Movie.addMovie(movie, function(err, movie){
        if(err) {
            throw err;
        }
        res.json(movie);
    });
});

// Update Movie

app.put("/api/movies/:_id", function (req, res){
    var id = req.params._id;
    var movie = req.body;
    Movie.updateMovie(id, movie, {}, function(err, movie){
        if(err) {
            throw err;
        }
        res.json(movie);
    });
});

// Delete Movie

app.delete("/api/movies/:_id", function (req, res){
    var id = req.params._id;
    Movie.removeMovie(id, function(err, movie){
        if(err) {
            throw err;
        }
        res.json(movie);
    });
});

app.listen(3000);
console.log("Running on port 3000...");
