const axios = require('axios');
const date = require('../helpers/date');
const Movie = require('../models/movie');

exports.movies = (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_key}&language=en-US&page=1`)
    .then( response => 
        res
        .status(200)
        .json(response.data)
    )
};

exports.latestmovies = (req, res) => {
    console.log(date.getTodayDate());
    axios.get(`https://api.themoviedb.org/3/discover/movie`,{
        params: {
            'api_key': process.env.API_key,
            'language': 'en-US',
            'include_adult': false,
            'sort_by': 'release_date.desc',
            'release_date.lte':date.getTodayDate()
    }})
    .then( response => 
        res
        .status(200)
        .json(response.data)
    )
};

exports.postfavourites = (req, res) => {
    
    const { backdrop_path, id, original_language, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count  } = req.body;

    const movie = new Movie({
        backdrop_path,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count,
        postedBy: req.user._id
    });

    //check movie already present in database
    Movie.find({ id: id }, (err, data) => {
        if (data.length > 0) {
            return res.status(422).json({
                message: 'Movie already added in favourites'

            });
        } 
        else {
            movie.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json(data);
            }
            );  
        }
    });
};


exports.favourites = (req, res) => {
    Movie.find({ postedBy: req.user._id })
    .populate('postedBy', '_id name')
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

