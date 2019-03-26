"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const formSchema = new mongoose.Schema({
    loggedInUser: {
        type: String,
        required: false,
        default: ""
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    diagnosis: {
        type: String,
        required: false
    },
    gestationalAge: {
        type: String,
        required: false
    },
    correctedGestationalAgeDay: {
        type: Number,
        required: false
    },
    correctedGestationalAgeWeek: {
        type: Number,
        required: false
    },
    dayOfLife: {
        type: Number,
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
        type: Number,
        required: false
    },
    currentWeight: {
        type: Number,
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
        type: Number,
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
    },
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
    },
    husCheck: {
        type: String,
        required: false
    },
    husText: {
        type: String,
        required: false
    },
    ra: {
        type: String,
        required: false
    },
    vent: {
        type: String,
        required: false
    },
    hfnc: {
        type: String,
        required: false
    },
    vt: {
        type: String,
        required: false
    },
    cpap: {
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
    },
    labsTests: {
        type: String,
        required: false
    },
    cbc: {
        type: String,
        required: false
    },
    tb: {
        type: String,
        required: false
    },
    bmp: {
        type: String,
        required: false
    },
    crp: {
        type: String,
        required: false
    },
    tg: {
        type: String,
        required: false
    },
    labsTestsText: {
        type: String,
        required: false
    },
    qtuLabs: {
        type: String,
        required: false
    },
    troughCheck: {
        type: String,
        required: false
    },
    troughText: {
        type: String,
        required: false
    },
    dateOfTrough: {
        type: String,
        required: false
    },
    timeOfTrough: {
        type: String,
        required: false
    },
    cxrCheck: {
        type: String,
        required: false
    },
    cxrDate: {
        type: String,
        required: false
    },
    kubCheck: {
        type: String,
        required: false
    },
    kubDate: {
        type: String,
        required: false
    },
    radiologyText: {
        type: String,
        required: false
    },
    hepBDate: {
        type: String,
        required: false
    },
    newbornScreenDate: {
        type: String,
        required: false
    },
    cchdEchoText: {
        type: String,
        required: false
    },
    eyeExamDate: {
        type: String,
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
    },
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
    },
    feedingMethod: {
        type: String,
        required: false
    },
    adLib: {
        type: String,
        required: false,
        default: ""
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
    },
    planOfCare: {
        type: String,
        required: false
    },
    socialConsiderations: {
        type: String,
        required: false
    },
    historyChanges: {
        type: String,
        required: false
    },
    referalls: {
        type: String,
        required: false
    },
    synagis: {
        type: String,
        required: false
    },
    vaccine: {
        type: String,
        required: false
    },
    pediatrician: {
        type: String,
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
    husCP: {
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
    },
    addedToDB: {
        type: Date,
        default: Date.now
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
