"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const otherTestsSchema = new mongoose.Schema({
    hepBDate: {
        type: String,
        required: false
    },
    newbornScreenDate: {
        type: String,
        required: false
    },
    cchdEchoText: {
        type: Number,
        required: false
    },
    eyeExamDate: {
        type: Number,
        required: false
    },
    eyeExamText: {
        type: String,
        required: false
    },
    fuDate: {
        type: String,
        required: false
    },
    hearingCheck: {
        type: String,
        required: false
    },
    carSeatCheck: {
        type: String,
        required: false
    },
    cprCheck: {
        type: String,
        required: false
    },
    circCheck: {
        type: String,
        required: false
    }
});

const Assessment = mongoose.model('OtherTests', otherTestsSchema);

module.exports = OtherTests;