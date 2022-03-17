const express = require('express');
const router = express.Router();
const { movies, latestmovies} = require('../controllers/movies');

router.get('/movies', movies);
router.get('/movies/latest', latestmovies);

    // router.get('/movies/favourites ', favourites);
    // router.post('/movies/favourites ', favourites);

module.exports = router;
