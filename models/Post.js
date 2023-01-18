const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingBid: {
        type: Number,
        required: true
    },
    currentBid: {
        type: Number,
        required: true
    },
    buyoutPrice: {
        type: Number,
        required: true
    },
    timeRemaining: {
        type: Number,
        required: true
    },
    // tags: {
    //     type: Array,
    //     required: true
    // },
    
    //status of whether product is shown or not (false = sold/don't show, true = not sold/show)
    status: {
        type: Boolean,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);