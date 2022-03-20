const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        id:{
            type: Number,
        },
        overview: {
            type: String,
            trim: true,
        },
        poster_path: {  
            type: String,
            trim: true,
        },
        release_date: {
            type: String,
            trim: true,
        },
        vote_average: {
            type: Number,
            trim: true,
        },
        vote_count: {
            type: Number,
            trim: true,
        },
        popularity: {
            type: Number,       
        },
        original_language: {
            type: String,
            trim: true,
        },
        original_title: {
            type: String,
            trim: true,
        },
        backdrop_path: {
            type: String,
            trim: true,
        },
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
