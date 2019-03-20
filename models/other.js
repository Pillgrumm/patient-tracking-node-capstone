"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const otherSchema = new mongoose.Schema({
    referalls: {
        type: String,
        required: false
    },
    synagis: {
        type: String,
        required: false
    },
    vaccine: {
        type: Number,
        required: false
    },
    pediatrician: {
        type: Number,
        required: false
    },
    lastBath: {
        type: String,
        required: false
    },
    consent: {
        type: String,
        required: false
    },
    hus: {
        type: String,
        required: false
    },
    cpDate: {
        type: String,
        required: false
    },
    cpTime: {
        type: String,
        required: false
    },
    phototherapyStartDate: {
        type: String,
        required: false
    },
    phototherapyEndDate: {
        type: String,
        required: false
    },
    phototherapySelect: {
        type: String,
        required: false
    }
});

const Other = mongoose.model('Other', otherSchema);

module.exports = Other;
