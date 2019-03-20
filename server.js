'use strict';

const User = require('./models/users');
const Session = require('./models/sessions');
const Patient = require('./models/patients');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const app = express();


app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.Promise = global.Promise;


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server;

function runServer(databaseUrl) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                    console.log(`Listening on localhost:${config.PORT}`);
                    resolve();
                })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}


if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}


function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// ---------------USER ENDPOINTS------------------------------

// GET
// Check for duplicate email in database for user sign up
app.get('/check-duplicate-email/:inputEmail', (req, res) => {
    let inputEmail = req.params.inputEmail;
    User
        .find({
            "email": inputEmail
        })
        .then(function (entries) {
            res.json({
                entries
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
})


// POST
// Create a new user

app.post('/users/create', (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error on genSalt'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error on hash'
                });
            }

            User.create({
                email,
                password: hash,
                username
            }, (err, item) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Error on Create User'
                    });
                }
                if (item) {
                    console.log(`New user with email ${email} was created`);
                    return res.status(200).json(item);
                }
            });
        });
    });

});


// User log in
app.post('/signin', function (req, res) {
    User
        .findOne({
            username: req.body.username
        }, function (err, items) {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            if (!items) {
                //bad email
                return res.status(401).json({
                    message: "Not found"
                });
            } else {
                items.validatePassword(req.body.password, function (err, isValid) {
                    if (err) {
                        console.log('There was an error validating email or password.');
                    }
                    if (!isValid) {
                        return res.status(401).json({
                            message: "Not found"
                        });
                    } else {
                        console.log("user logged in successfully");
                        return res.json(items);
                    }
                });
            };
        });
});

// POST
// Add General Information

// POST
// Add a session

//Patient
app.post('/patient/create', (req, res) => {


    Patient.create({
        loggedInUser: req.body.loggedInUser,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        diagnosis: req.body.diagnosis,
        gestationalAge: req.body.gestationalAge,
        correctedGestationalAgeDay: req.body.correctedGestationalAgeDay,
        correctedGestationalAgeWeek: req.body.correctedGestationalAgeWeek,
        dayOfLife: req.body.dayOfLife,
        dayOfBirth: req.body.dayOfBirth,
        timeOfBirth: req.body.timeOfBirth,
        birthWeight: req.body.birthWeight,
        currentWeight: req.body.currentWeight,
        kaiserScore: req.body.kaiserScore,
        bloodType: req.body.bloodType,
        coombs: req.body.coombs,
        acuity: req.body.acuity,
        bedNumber: req.body.bedNumber,
        dateOfAdmission: req.body.dateOfAdmission,
        timeOfAdmission: req.body.timeOfAdmission,
        dateOfDischarge: req.body.dateOfDischarge,
        timeOfDischarge: req.body.timeOfDischarge
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error on session.add'
            });
        }
        if (item) {
            console.log(`Session added for ${sessionDate}`);
            return res.json(item);
        }
    });
});

////Maternal
//app.post('/maternal/create', (req, res) => {
//
//
//    Maternal.create({
//        gravida: req.body.gravida,
//        para: req.body.para,
//        age: req.body.age,
//        vagCs: req.body.vagCs,
//        apgar1: req.body.apgar1,
//        apgar2: req.body.apgar2,
//        rom: req.body.rom,
//        hx: req.body.hx,
//        maternalBloodType: req.body.maternalBloodType
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Assessment
//app.post('/assessment/create', (req, res) => {
//
//
//    Assessment.create({
//        husCheck: req.body.husCheck,
//        husText: req.body.husText,
//        respiratory: req.body.respiratory,
//        respiratoryText: req.body.respiratoryText,
//        fio2: req.body.fio2,
//        abdpb: req.body.abdpb,
//        murmur: req.body.murmur,
//        echo: req.body.echo,
//        cardiacResults: req.body.cardiacResults
//        meds: req.body.meds
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Labs
//app.post('/labs/create', (req, res) => {
//
//
//    Labs.create({
//        labsTests: req.body.labsTests,
//        labsTestsText: req.body.labsTestsText,
//        qtuLabs: req.body.qtuLabs,
//        troughCheck: req.body.troughCheck,
//        troughText: req.body.troughText,
//        dateOfTrough: req.body.dateOfTrough,
//        timeOfTrough: req.body.timeOfTrough,
//        cxrCheck: req.body.cxrCheck,
//        cxrDate: req.body.cxrDate,
//        kubCheck: req.body.kubCheck,
//        kubDate: req.body.kubDate,
//        radiologyText: req.body.radiologyText
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Other tests
//app.post('/othertests/create', (req, res) => {
//
//
//    OtherTests.create({
//        hepBDate: req.body.hepBDate,
//        newbornScreenDate: req.body.newbornScreenDate,
//        cchdEchoText: req.body.cchdEchoText,
//        eyeExamDate: req.body.eyeExamDate,
//        eyeExamText: req.body.eyeExamText,
//        fuDate: req.body.fuDate,
//        hearingCheck: req.body.hearingCheck,
//        carSeatCheck: req.body.carSeatCheck,
//        cprCheck: req.body.cprCheck,
//        circCheck: req.body.circCheck
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Drugs
//app.post('/drugs/create', (req, res) => {
//
//
//    Drugs.create({
//        pivCheck: req.body.pivCheck,
//        piccCheck: req.body.piccCheck,
//        uacCheck: req.body.uacCheck,
//        uvcCheck: req.body.uvcCheck,
//        salineLockCheck: req.body.salineLockCheck,
//        drugInput: req.body.drugInput,
//        ccDrug: req.body.ccDrug,
//        hrDrug: req.body.hrDrug,
//        tDrugInput: req.body.tDrugInput,
//        ccTDrug: req.body.ccTDrug,
//        hrTDrug: req.body.hrTDrug,
//        ccIl: req.body.ccIl,
//        hrIl: req.body.hrIl,
//        drugNotes: req.body.drugNotes
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Feeding
//app.post('/feeding/create', (req, res) => {
//
//
//    Feeding.create({
//        feedingMethod: req.body.feedingMethod,
//        adLib: req.body.adLib,
//        cueBased: req.body.cueBased,
//        fiCC: req.body.fiCC,
//        hrCC: req.body.hrCC,
//        feedingAttempts: req.body.feedingAttempts,
//        completedAttempts: req.body.completedAttempts
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Depth Notes
//app.post('/depth/create', (req, res) => {
//
//
//    Depth.create({
//        planOfCare: req.body.planOfCare,
//        socialConsiderations: req.body.socialConsiderations,
//        historyChanges: req.body.historyChanges
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});
//
////Other Info
//app.post('/other/create', (req, res) => {
//
//
//    Other.create({
//        referalls: req.body.referalls,
//        synagis: req.body.synagis,
//        vaccine: req.body.vaccine,
//        pediatrician: req.body.pediatrician,
//        lastBath: req.body.lastBath,
//        consent: req.body.consent,
//        hus: req.body.hus,
//        cpDate: req.body.cpDate,
//        cpTime: req.body.cpTime,
//        phototherapyStartDate: req.body.phototherapyStartDate,
//        phototherapyEndDate: req.body.phototherapyEndDate,
//        phototherapySelect: req.body.phototherapySelect
//    }, (err, item) => {
//        if (err) {
//            return res.status(500).json({
//                message: 'Internal Server Error on session.add'
//            });
//        }
//        if (item) {
//            console.log(`Session added for ${sessionDate}`);
//            return res.json(item);
//        }
//    });
//});


// GET
// Get sessions to populate total days in Dashboard
app.get('/sessions-total/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        })
        .count()
        .then((sessions) => {
            res.json(sessions);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});

// GET
// Get sessions to populate days in a row in Dashboard
app.get('/sessions-streak/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        }, {
            sessionDateUnix: 1
        })
        .sort({
            sessionDateUnix: -1
        })
        .then((sessions) => {
            res.json(sessions);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});


// GET
// Get sessions to populate last 10 days in Dashboard
app.get('/sessions-ten/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        }, {
            sessionDateUnix: 1
        })
        .sort({
            sessionDateUnix: -1
        })
        .then((sessions) => {
            res.json(sessions);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});

// GET
// Get sessions to most used method in Dashboard
app.get('/sessions-method/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        }, {
            sessionType: 1
        })
        .then((sessions) => {
            res.json(sessions);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});

// GET
// Get sessions to populate avg session length in Dashboard
app.get('/sessions-avg/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        }, {
            sessionTime: 1
        })
        .then((sessions) => {
            res.json(sessions);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});

// GET
// Get sessions to populate journal sidebar on Home Page
app.get('/sessions-journal-sb/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        })
        .sort({
            sessionDate: -1
        })
        .limit(6)
        .then((sessions) => {
            let sessionOutput = [];
            sessions.map(function (session) {
                sessionOutput.push(session);
            });
            res.json(sessionOutput);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});


// GET
// Get sessions to populate journal screen
app.get('/sessions-journal/:id', (req, res) => {
    Session
        .find({
            loggedInUserId: req.params.id
        })
        .sort({
            sessionDate: -1
        })
        .then((sessions) => {
            let sessionOutput = [];
            sessions.map(function (session) {
                sessionOutput.push(session);
            });
            res.json(sessionOutput);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error getting session'
            });
        });
});


// UPDATE
// Update user password
app.put('/user-pw/:id', function (req, res) {
    let password = req.body.pw;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error on genSalt'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error on hash'
                });
            }

            User
                .findByIdAndUpdate(req.params.id, {
                    $set: {
                        password: hash
                    }
                })
                .then((user) => {
                    return res.json(user);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({
                        message: 'Password was not modified'
                    });
                });
        });
    });
});

// DELETE
// Delete Journal entry from journal screen
app.delete('/sessions/:id', (req, res) => {
    Session
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log(`Deleted entry with id \`${req.params.id}\``);
            res.status(204).end();
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error deleting entry'
            })
        });
});

// ---------------MISC------------------------------
// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
