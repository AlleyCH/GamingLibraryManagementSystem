const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    genre: {
        type: String, default: '',
        trim: true
    },
  
    platform:{
        type: String, //platfrom of what the game can be played on
        required: 'Platform cannot be blank'
    },

    releaseYear: { 
        type: Date,
        default: Date.now,
        required: 'release year cannot be blank'
    },
   
    developer: {
        type: String,
        required: 'developer cannot be blank'
    },

    rating: {
        type: Number
    },

    description: {
        type: String, default: '',
        required: 'description cannot be blank',
        trim: true
    },

    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Game', GameSchema);
