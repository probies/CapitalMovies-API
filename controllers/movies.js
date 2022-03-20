const axios = require('axios');
const date = require('../helpers/date');

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