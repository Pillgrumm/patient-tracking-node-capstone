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
        type: String,
        required: false
    },
    hrDrug: {
        type: String,
        required: false
    },
    tDrugInput: {
        type: String,
        required: false
    },
    ccTDrug: {
        type: String,
        required: false
    },
    hrTDrug: {
        type: String,
        required: false
    },
    ccIl: {
        type: String,
        required: false
    },
    hrIl: {
        type: String,
        required: false
    },
    drugNotes: {
        type: String,
        required: false
    }
});

const Drugs = mongoose.model('Drugs', drugsSchema);

module.exports = Drugs;
