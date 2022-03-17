const axios = require('axios');

exports.movies = (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_key}&language=en-US&page=1`)
    .then( response => 
        res
        .status(200)
        .json(response.data)
    )
};

exports.latestmovies = (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_key}&language=en-US&page=1`)
    .then( response => 
        res
        .status(200)
        .json(response.data)
    )
};