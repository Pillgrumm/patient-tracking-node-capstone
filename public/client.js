// Triggers


//when the page loads...
$(document).ready(function () {
    //do stuff
    $(".icon-content").hide();
    $(".section-content").hide();
    $(".legend-show").show();
    $(".legend-hide").hide();
});

//button triggers
$(document).on('click', 'input', function (event) {
    $(this).parent().find(".icon-content-info").show();
    $(".icon-content-error").hide();

});

$(document).on('blur', 'input', function (event) {
    $(this).parent().find(".icon-content-info").hide();
    $(this).parent().find(".icon-content-error").show();

});

$(document).on('click', 'select', function (event) {
    event.preventDefault();
    $(this).parent().find(".icon-content-info").show();
    $(".icon-content-error").hide();

});

$(document).on('blur', 'select', function (event) {
    event.preventDefault();
    $(this).parent().find(".icon-content-info").hide();
    $(this).parent().find(".icon-content-error").show();

});

$(document).on('click', '.legend-show', function (event) {
    event.preventDefault();
    $(this).parent().find(".legend-show").hide();
    $(this).parent().find(".legend-hide").show();
    $(this).parent().parent().find(".section-content").show();
});

$(document).on('click', '.legend-hide', function (event) {
    event.preventDefault();
    $(this).parent().find(".legend-hide").hide();
    $(this).parent().find(".legend-show").show();
    $(this).parent().parent().find(".section-content").hide();
});

$('#login').on('click', function (event) {
    event.preventDefault();
    const loginUsername = $('.loginUsername').val();
    const loginPassword = $('.loginPassword').val();
    // check for spaces, undefined
    if ((!loginUsername) || (loginUsername.length < 1) || (loginUsername.indexOf(' ') > 0)) {
        alert('Invalid Email')
    } else if ((!loginPassword) || (loginPassword.length < 1) || (loginPassword.indexOf(' ') > 0)) {
        alert('Invalid password')
    } else {
        const loginObject = {
            username: loginUsername,
            password: loginPassword
        };
        console.log(loginObject);
        $.ajax({
                type: 'POST',
                url: '/signin',
                dataType: 'json',
                data: JSON.stringify(loginObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.logged-in-user').val(result._id);
                //                showDashboardScreen();
                $('#login-form').addClass('hidden');
                $('#landing-page-info').addClass('hidden');
                $('#full-form').removeClass('hidden');
                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Invalid username and password combination. Please check your username and password and try again.');
            });
    }
});

$('#register').on('click', function (event) {
    event.preventDefault();
    const username = $('.registerUsername').val();
    const password = $('.registerPassword').val();
    const email = $('.registerEmail').val();
    if (username == '') {
        alert('Please add username.');
    } else if (email == "") {
        alert('Please enter an email');
    } else if (password == "") {
        alert('Please enter a password');
    } else {
        const newUserObject = {
            email,
            password,
            username
        };
        console.log(newUserObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                //            showLogInScreen();
                $('#sign-up-form').addClass('hidden');
                $('#landing-page-info').addClass('hidden');
                $('#full-form').removeClass('hidden');
                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});


//General Information time of discharge returning undefined UNFINISHED
$('#general-submit').on('click', function (event) {
    event.preventDefault();
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const diagnosis = $('.diagnosis').val();
    const gestationalAge = $('.gestationalAge').val();
    const correctedGestationalAgeDay = $('.correctedGestationalAgeDay').val();
    const correctedGestationalAgeWeek = $('.correctedGestationalAgeWeek').val();
    const dayOfLife = $('.dayOfLife').val();
    const dayOfBirth = $('.dayOfBirth').val();
    const timeOfBirth = $('.timeOfBirth').val();
    const birthWeight = $('.birthWeight').val();
    const currentWeight = $('.currentWeight').val();
    const kaiserScore = $('.kaiserScore').val();
    const bloodType = $('.bloodType').val();
    const coombs = $('.coombs').val();
    const acuity = $('.acuity').val();
    const bedNumber = $('.bedNumber').val();
    const dateOfAdmission = $('.dateOfAdmission').val();
    const timeOfAdmission = $('.timeOfAdmission').val();
    const dateOfDischarge = $('.dateOfDischarge').val();
    const timeOfDischarge = $('.timeOfDischarge').val();
    if (firstName == '') {
        alert('Please enter first name.');
    } else if (lastName == "") {
        alert('Please enter last name');
    } else if (diagnosis == "") {
        alert('Please enter diagnosis');
    } else if (gestationalAge == "") {
        alert('Please enter gestational age');
    } else if (correctedGestationalAgeDay == "") {
        alert('Please enter gestational age day');
    } else if (correctedGestationalAgeWeek == "") {
        alert('Please enter gestational age week');
    } else if (dayOfLife == "") {
        alert('Please enter day of life');
    } else if (dayOfBirth == "") {
        alert('Please enter day of birth');
    } else if (timeOfBirth == "") {
        alert('Please enter time of birth');
    } else if (birthWeight == "") {
        alert('Please enter birth weight');
    } else if (currentWeight == "") {
        alert('Please enter current weight');
    } else if (kaiserScore == "") {
        alert('Please enter kaiser score');
    } else if (bloodType == "") {
        alert('Please enter bloodtype');
    } else if (coombs == "") {
        alert('Please enter COOMBS score');
    } else if (acuity == "") {
        alert('Please enter acuity score');
    } else if (bedNumber == "") {
        alert('Please enter bed number');
    } else if (dateOfAdmission == "") {
        alert('Please enter date of admission');
    } else if (timeOfAdmission == "") {
        alert('Please enter time of admission');
    } else {
        const generalInformationObject = {
            firstName,
            lastName,
            diagnosis,
            gestationalAge,
            correctedGestationalAgeDay,
            correctedGestationalAgeWeek,
            dayOfLife,
            dayOfBirth,
            timeOfBirth,
            birthWeight,
            currentWeight,
            kaiserScore,
            bloodType,
            coombs,
            acuity,
            bedNumber,
            dateOfAdmission,
            timeOfAdmission,
            dateOfDischarge,
            timeOfDischarge
        };
        console.log(generalInformationObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(generalInformationObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                //            showLogInScreen();
                //                $('#sign-up-form').addClass('hidden');
                //                $('#landing-page-info').addClass('hidden');
                //                $('#full-form').removeClass('hidden');
                //                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

//Maternal Information UNFINISHED
$('#maternal-submit').on('click', function (event) {
    event.preventDefault();
    const gravida = $('.gravida').val();
    const para = $('.para').val();
    const age = $('.age').val();
    const vagCs = $('.vagCs').val();
    const apgar1 = $('.apgar1').val();
    const apgar2 = $('.apgar2').val();
    const rom = $('.rom').val();
    const hx = $('.hx').val();
    const maternalBloodType = $('.maternalBloodType').val();
    if (gravida == '') {
        alert('Please enter gravida count');
    } else if (para == "") {
        alert('Please enter para count');
    } else if (age == "") {
        alert('Please enter maternal age');
    } else if (vagCs == "") {
        alert('Please specify birth type');
    } else if (apgar1 == "") {
        alert('Please enter digit for first APGAR selection');
    } else if (apgar2 == "") {
        alert('Please enter maternal rupture of membranes');
    } else if (hx == "") {
        alert('Please enter maternal history');
    } else if (maternalBloodType == "") {
        alert('Please enter maternal bloodtype');
    } else {
        const maternalInformationObject = {
            gravida,
            para,
            age,
            vagCs,
            apgar1,
            apgar2,
            rom,
            hx,
            maternalBloodType
        };
        console.log(maternalInformationObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(maternalInformationObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                //            showLogInScreen();
                //                $('#sign-up-form').addClass('hidden');
                //                $('#landing-page-info').addClass('hidden');
                //                $('#full-form').removeClass('hidden');
                //                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

//Assessment Information UNFINISHED
//Note to self: make sure respiratory works.
$('#assessment-submit').on('click', function (event) {
    event.preventDefault();
    const husCheck = $('.husCheck').val();
    const husText = $('.husText').val();
    const respiratory = $('.respiratory').val();
    const respiratoryText = $('.respiratoryText').val();
    const fio2 = $('.fio2').val();
    const abdpb = $('.abdpb').val();
    const murmur = $('.murmur').val();
    const echo = $('.echo').val();
    const cardiacResults = $('.cardiacResults').val();
    const meds = $('.meds').val();
    if (husCheck == '') {
        alert('Please check HUS');
    } else if (husText == "") {
        alert('Please enter HUS text');
    } else if (respiratory == "") {
        alert('Please enter respiratory setting');
    } else if (respiratoryText == "") {
        alert('Please enter respiratory notes');
    } else if (fio2 == "") {
        alert('Please enter FIO2 percentage');
    } else if (abdpb == "") {
        alert('Please enter AB/Desat/PB information');
    } else if (murmur == "") {
        alert('Please check Murmur');
    } else if (echo == "") {
        alert('Please check ECHO');
    } else if (cardiacResults == "") {
        alert('Please input cardiac results');
    } else if (meds == "") {
        alert('Please input meds');
    } else {
        const assessmentInformationObject = {
            husCheck,
            husText,
            respiratory,
            respiratoryText,
            fio2,
            abdpb,
            murmur,
            echo,
            cardiacResults,
            meds
        };
        console.log(assessmentInformationObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(assessmentInformationObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                //            showLogInScreen();
                //                $('#sign-up-form').addClass('hidden');
                //                $('#landing-page-info').addClass('hidden');
                //                $('#full-form').removeClass('hidden');
                //                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

//Labs/Tests Information UNFINISHED
$('#labs-submit').on('click', function (event) {
    event.preventDefault();
    const labsTests = $('.labsTests').val();
    const labsTestsText = $('.labsTestsText').val();
    const qtuLabs = $('.qtuLabs').val();
    const troughCheck = $('.troughCheck').val();
    const troughText = $('.troughText').val();
    const dateOfTrough = $('.dateOfTrough').val();
    const timeOfTrough = $('.timeOfTrough').val();
    const cxrCheck = $('.cxrCheck').val();
    const cxrDate = $('.cxrDate').val();
    const kubCheck = $('.kubCheck').val();
    const kubDate = $('.kubDate').val();
    const radiologyText = $('.radiologyText').val();
    if (labsTests == '') {
        alert('Please check labs');
    } else if (labsTestsText == "") {
        alert('Please input lab test results');
    } else if (qtuLabs == "") {
        alert('Please enter QTu Lab results');
    } else if (troughCheck == "") {
        alert('Please check trough');
    } else if (troughText == "") {
        alert('Please enter trough notes');
    } else if (dateOfTrough == "") {
        alert('Please enter date of trough');
    } else if (timeOfTrough == "") {
        alert('Please enter time of trough');
    } else if (cxrCheck == "") {
        alert('Please check CXR');
    } else if (cxrDate == "") {
        alert('Please input CXR date');
    } else if (kubCheck == "") {
        alert('Please check KUB');
    } else if (kubDate == "") {
        alert('Please input KUB date');
    } else if (radiologyText == "") {
        alert('Please input radiology report');
    } else {
        const labsInformationObject = {
            labsTests,
            labsTestsText,
            qtuLabs,
            troughCheck,
            troughText,
            dateOfTrough,
            timeOfTrough,
            cxrCheck,
            cxrDate,
            kubCheck,
            kubDate,
            radiologyText
        };
        console.log(labsInformationObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(labsInformationObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                $('.js-signin-success').html('Thanks for signing up! Please sign in.');
                $('.js-signin-success').addClass('change-status-success');
                //            showLogInScreen();
                //                $('#sign-up-form').addClass('hidden');
                //                $('#landing-page-info').addClass('hidden');
                //                $('#full-form').removeClass('hidden');
                //                $('body').css('background', 'white');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});


$('#sign-up-link').on('click', function (event) {
    event.preventDefault();
    $('#login-form').addClass('hidden');
    $('#sign-up-form').removeClass('hidden');
});

$('#sign-in-link').on('click', function (event) {
    event.preventDefault();
    $('#sign-up-form').addClass('hidden');
    $('#login-form').removeClass('hidden');
});

//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
