let mongoose = require('mongoose');

// Title Schema
let titleSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cover: {
        type: String
    }
});

let Title = module.exports = mongoose.model('Title', titleSchema );

// Get Titles
module.exports.getTitles = function( callback, limit ) {
    Title.find( callback ).limit( limit );
}