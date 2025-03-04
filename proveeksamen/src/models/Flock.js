const mongoose = require('mongoose');

const flockSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.UUID,
        required: true,
        ref: 'User'
    },
    flockName: {
        type: String,
        required: true
    },
    seriesClassification: {
        type: String,
        required: true
    },
    earMark: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

const Flock = mongoose.model('Flock', flockSchema);

module.exports = Flock;