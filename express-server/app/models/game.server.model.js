const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the game schema
const GameSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    genre: {
        type: String,
        default: '',
        trim: true
    },
    platform: {
        type: String,
        required: 'Platform cannot be blank'
    },
    releaseYear: {
        type: Date,
        default: Date.now,
        required: 'Release year cannot be blank'
    },
    developer: {
        type: String,
        required: 'Developer cannot be blank'
    },
    rating: {
        type: Number
    },
    description: {
        type: String,
        default: '',
        required: 'Description cannot be blank',
        trim: true
    },
});

GameSchema.set('toJSON', {
	getters: true,
	virtuals: true
});
// Create a model based on the game schema
const Game = mongoose.model('Game', GameSchema);
