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
        type: String,
        required: false
    },
    hrCC: {
        type: String,
        required: false
    },
    feedingAttempts: {
        type: String,
        required: false
    },
    completedAttempts: {
        type: String,
        required: false
    }
});

const Feeding = mongoose.model('Feeding', feedingSchema);

module.exports = Feeding;
