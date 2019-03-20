"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const labsSchema = new mongoose.Schema({
    labsTests: {
        type: String,
        required: false
    },
    labsTestsText: {
        type: String,
        required: false
    },
    qtuLabs: {
        type: Number,
        required: false
    },
    troughCheck: {
        type: Number,
        required: false
    },
    troughText: {
        type: String,
        required: false
    },
    dateOfTrough: {
        type: String,
        required: false
    },
    timeOfTrough: {
        type: String,
        required: false
    },
    cxrCheck: {
        type: String,
        required: false
    },
    cxrDate: {
        type: String,
        required: false
    },
    kubCheck: {
        type: String,
        required: false
    },
    kubDate: {
        type: String,
        required: false
    },
    radiologyText: {
        type: String,
        required: false
    }
});

const Labs = mongoose.model('Labs', labsSchema);

module.exports = Labs;
