const express = require('express');
const router = express.Router();
const { movies, latestmovies, postfavourites, favourites, search} = require('../controllers/movies');
const { requireSignin, authMiddleware } = require('../controllers/auth');

router.get('/movies', movies);
router.get('/movies/latest', latestmovies);
router.get('/movies/favourites', requireSignin, authMiddleware, favourites);
router.post('/movies/favourites', requireSignin, authMiddleware, postfavourites);
router.get('/movies/search', search);

module.exports = router;
