"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const feedingSchema = new mongoose.Schema({
    feedingMethod: {
        type: String,
        required: false
    },
    adLib: {
        type: String,
        required: false
    },
    cueBased: {
        type: String,
        required: false
    },
    fiCC: {
        type: Number,
        required: false
    },
    hrCC: {
        type: Number,
        required: false
    },
    feedingAttempts: {
        type: Number,
        required: false
    },
    completedAttempts: {
        type: Number,
        required: false
    }
});

const Feeding = mongoose.model('Feeding', feedingSchema);

module.exports = Feeding;
