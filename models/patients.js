"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema({
    loggedInUser: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: Number,
        required: false
    },
    diagnosis: {
        type: Number,
        required: false
    },
    gestationalAge: {
        type: String,
        required: false
    },
    correctedGestationalAgeDay: {
        type: String,
        required: false
    },
    correctedGestationalAgeWeek: {
        type: String,
        required: false
    },
    dayOfLife: {
        type: String,
        required: false
    },
    dayOfBirth: {
        type: String,
        required: false
    },
    timeOfBirth: {
        type: String,
        required: false
    },
    birthWeight: {
        type: String,
        required: false
    },
    currentWeight: {
        type: String,
        required: false
    },
    kaiserScore: {
        type: String,
        required: false
    },
    bloodType: {
        type: String,
        required: false
    },
    coombs: {
        type: String,
        required: false
    },
    acuity: {
        type: String,
        required: false
    },
    bedNumber: {
        type: String,
        required: false
    },
    dateOfAdmission: {
        type: String,
        required: false
    },
    timeOfAdmission: {
        type: String,
        required: false
    },
    dateOfDischarge: {
        type: String,
        required: false
    },
    timeOfDischarge: {
        type: String,
        required: false
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
