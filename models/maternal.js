"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const maternalSchema = new mongoose.Schema({
    gravida: {
        type: Number,
        required: false
    },
    para: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    vagCs: {
        type: String,
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
        type: Number,
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

const Maternal = mongoose.model('Maternal', maternalSchema);

module.exports = Maternal;
