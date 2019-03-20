"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const drugsSchema = new mongoose.Schema({
    pivCheck: {
        type: String,
        required: false
    },
    piccCheck: {
        type: String,
        required: false
    },
    uacCheck: {
        type: String,
        required: false
    },
    uvcCheck: {
        type: String,
        required: false
    },
    salineLockCheck: {
        type: String,
        required: false
    },
    drugInput: {
        type: String,
        required: false
    },
    ccDrug: {
        type: Number,
        required: false
    },
    hrDrug: {
        type: Number,
        required: false
    },
    tDrugInput: {
        type: String,
        required: false
    },
    ccTDrug: {
        type: Number,
        required: false
    },
    hrTDrug: {
        type: Number,
        required: false
    },
    ccIl: {
        type: Number,
        required: false
    },
    hrIl: {
        type: Number,
        required: false
    },
    drugNotes: {
        type: String,
        required: false
    }
});

const Drugs = mongoose.model('Drugs', drugsSchema);

module.exports = Drugs;
