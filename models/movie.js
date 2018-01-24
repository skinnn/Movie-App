var mongoose = require("mongoose");

// Movie Schema
var movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    genre_2:{
        type: String
    },
    genre_3:{
        type: String
    },
    alt_titles:{
        type: String
    },
    year:{
        type: String,
        required: true
    },
    img_url:{
        type: String,
        required: true
    },
    runtime:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imdb_url:{
        type: String,
        required: true
    },
    imdb_score:{
        type: String,
        required: true
    },
    metascore:{
        type: String,
        required: true
    },
    rated:{
        type: String,
        required: true
    },
    director:{
        type: String
    },
    writer:{
        type: String
    },
    stars:{
        type: String
    },
    budget:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Movie = module.exports = mongoose.model("Movie", movieSchema);

// Get Movies
module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}

// Get Movie
module.exports.getMovieById = function(id, callback){
    Movie.findById(id, callback);
}

// Add Movie
module.exports.addMovie = function(movie, callback){
    Movie.create(movie, callback);
}

// Update Movie
module.exports.updateMovie = function(id, movie, options, callback){
    var query = {_id: id};
    var update = {
        title : movie.title,
        alt_titles : movie.alt_titles,
        genre : movie.genre,
        genre_2 : movie.genre_2,
        genre_3 : movie.genre_3,
        year : movie.year,
        img_url : movie.img_url,
        runtime : movie.runtime,
        description : movie.description,
        imdb_url : movie.imdb_url,
        imdb_score : movie.imdb_score,
        metascore : movie.metascore,
        rated : movie.rated,
        director : movie.director,
        writer : movie.writer,
        stars : movie.stars,
        budget : movie.budget,
        watch_url : movie.watch_url
    }
    Movie.findOneAndUpdate(query, update, options, callback);
}

// Delete Movie
module.exports.removeMovie = function(id, callback){
    var query = {_id: id};
    Movie.remove(query, callback);
}
