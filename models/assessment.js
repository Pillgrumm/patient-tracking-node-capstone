"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const assessmentSchema = new mongoose.Schema({
    husCheck: {
        type: String,
        required: false
    },
    husText: {
        type: String,
        required: false
    },
    respiratory: {
        type: String,
        required: false
    },
    respiratoryText: {
        type: String,
        required: false
    },
    fio2: {
        type: Number,
        required: false
    },
    abdpb: {
        type: String,
        required: false
    },
    murmur: {
        type: String,
        required: false
    },
    echo: {
        type: String,
        required: false
    },
    cardiacResults: {
        type: String,
        required: false
    },
    meds: {
        type: String,
        required: false
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
