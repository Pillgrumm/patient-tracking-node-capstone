"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const maternalSchema = new mongoose.Schema({
    gravida: {
        type: String,
        required: false
    },
    para: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    vagCs: {
        type: Number,
        required: false
    },
    apgar1: {
        type: String,
        required: false
    },
    apgar2: {
        type: String,
        required: false
    },
    rom: {
        type: String,
        required: false
    },
    hx: {
        type: String,
        required: false
    },
    maternalBloodType: {
        type: String,
        required: false
    }
});

const Maternal = mongoose.model('Maternal', patientSchema);

module.exports = Patient;
