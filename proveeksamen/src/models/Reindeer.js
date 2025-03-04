const mongoose = require('mongoose');

const reindeerSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    flock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flock',
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

const Reindeer = mongoose.model('Reindeer', reindeerSchema);

module.exports = Reindeer;