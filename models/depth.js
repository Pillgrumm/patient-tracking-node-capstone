"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const depthSchema = new mongoose.Schema({
    planOfCare: {
        type: String,
        required: false
    },
    socialConsiderations: {
        type: String,
        required: false
    },
    historyChanges: {
        type: String,
        required: false
    }
});

const Depth = mongoose.model('Depth', depthSchema);

module.exports = Depth;
