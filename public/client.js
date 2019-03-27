// Triggers
function getPreviousEntries() {
    $.ajax({
            type: 'GET',
            url: `/get-all-entries/`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log(result);
            let htmlOutput = "";
            for (i = 0; i < result.entries.length; i++) {
                console.log(result.entries[i]._id);
                console.log(result.entries[i].firstName);
                console.log(result.entries[i].lastName);
                console.log(result.entries[i].addedToDB);
                htmlOutput += '<option value="' + result.entries[i]._id + '">' + result.entries[i].addedToDB + ' ' + result.entries[i].firstName + ' ' + result.entries[i].lastName + '</option>';
            }
            $(".previous-entries-dropdown").html(htmlOutput);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

//when the page loads...
$(document).ready(function () {
    //do stuff
    $(".icon-content").hide();
    $(".section-content").hide();
    $(".legend-show").show();
    $(".legend-hide").hide();
    getPreviousEntries();
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
                $('.logged-in-user').val(result._id);
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
$('#form-submit-button').on('click', function (event) {
    event.preventDefault();
    const loggedInUser = $('.logged-in-user').val();
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
    const gravida = $('.gravida').val();
    const para = $('.para').val();
    const age = $('.age').val();
    const vagCs = $('.vagCs').val();
    const apgar1 = $('.apgar1').val();
    const apgar2 = $('.apgar2').val();
    const rom = $('.rom').val();
    const hx = $('.hx').val();
    const husCheck = $("input[name='husCheck']:checked").val();
    const husText = $('.husText').val();
    const respiratoryOptions = $("input[name='respiratory']:checked").val();
    const respiratoryText = $('.respiratoryText').val();
    const fio2 = $('.fio2').val();
    const abdpb = $('.abdpb').val();
    const murmur = $("input[name='murmur']:checked").val();
    const echo = $("input[name='echo']:checked").val();
    const cardiacResults = $('.cardiacResults').val();
    const meds = $('.meds').val();
    const maternalBloodType = $('.maternalBloodType').val();
    const cbc = $("input[name='cbc']:checked").val();
    const tb = $("input[name='tb']:checked").val();
    const bmp = $("input[name='bmp']:checked").val();
    const crp = $("input[name='crp']:checked").val();
    const tg = $("input[name='tg']:checked").val();
    const labsTestsText = $('.labsTestsText').val();
    const qtuLabs = $('.qtuLabs').val();
    const troughCheck = $("input[name='troughCheck']:checked").val();
    const troughText = $('.troughText').val();
    const dateOfTrough = $('.dateOfTrough').val();
    const timeOfTrough = $('.timeOfTrough').val();
    const cxrCheck = $("input[name='cxrCheck']:checked").val();
    const cxrDate = $('.cxrDate').val();
    const kubCheck = $("input[name='kubCheck']:checked").val();
    const kubDate = $('.kubDate').val();
    const radiologyText = $('.radiologyText').val();
    const hepBDate = $('.hepBDate').val();
    const newbornScreenDate = $('.newbornScreenDate').val();
    const cchdEchoText = $('.cchdEchoText').val();
    const eyeExamDate = $('.eyeExamDate').val();
    const eyeExamText = $('.eyeExamText').val();
    const fuDate = $('.fuDate').val();
    const hearingCheck = $("input[name='hearingCheck']:checked").val();
    const carSeatCheck = $("input[name='carSeatCheck']:checked").val();
    const cprCheck = $("input[name='cprCheck']:checked").val();
    const circCheck = $("input[name='circCheck']:checked").val();
    const pivCheck = $("input[name='pivCheck']:checked").val();
    const piccCheck = $("input[name='piccCheck']:checked").val();
    const uacCheck = $("input[name='uacCheck']:checked").val();
    const uvcCheck = $("input[name='uvcCheck']:checked").val();
    const salineLockCheck = $("input[name='salineLockCheck']:checked").val();
    const drugInput = $('.drugInput').val();
    const ccDrug = $('.ccDrug').val();
    const hrDrug = $('.hrDrug').val();
    const tDrugInput = $('.tDrugInput').val();
    const ccTDrug = $('.ccTDrug').val();
    const hrTDrug = $('.hrTDrug').val();
    const ccIl = $('.ccIl').val();
    const hrIl = $('.hrIl').val();
    const drugNotes = $('.drugNotes').val();
    const feedingMethod = $('.feedingMethod').val();
    const adLib = $("input[name='adLib']:checked").val();
    console.log(adLib);
    const cueBased = $("input[name='cueBased']:checked").val();
    console.log(cueBased);
    const fiCC = $('.fiCC').val();
    const hrCC = $('.hrCC').val();
    const feedingAttempts = $('.feedingAttempts').val();
    const completedAttempts = $('.completedAttempts').val();
    const planOfCare = $('.planOfCare').val();
    const socialConsiderations = $('.socialConsiderations').val();
    const historyChanges = $('.historyChanges').val();
    const referalls = $('.referalls').val();
    const synagis = $("input[name='synagis']:checked").val();
    const vaccine = $("input[name='vaccine']:checked").val();
    const pediatrician = $('.pediatrician').val();
    const lastBath = $('.lastBath').val();
    const consent = $("input[name='consent']:checked").val();
    const husCP = $("input[name='husCP']:checked").val();
    const cpDate = $('.cpDate').val();
    const cpTime = $('.cpTime').val();
    const phototherapyStartDate = $('.phototherapyStartDate').val();
    const phototherapyEndDate = $('.phototherapyEndDate').val();
    const phototherapySelect = $('.phototherapySelect').val();
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
    } else if (bloodType == null) {
        alert('Please enter bloodtype');
    } else if (coombs == null) {
        alert('Please enter COOMBS score');
    } else if (acuity == null) {
        alert('Please enter acuity score');
    } else if (bedNumber == "") {
        alert('Please enter bed number');
    } else if (dateOfAdmission == "") {
        alert('Please enter date of admission');
    } else if (timeOfAdmission == "") {
        alert('Please enter time of admission');
    } else if (gravida == '') {
        alert('Please enter gravida count');
    } else if (para == "") {
        alert('Please enter para count');
    } else if (age == "") {
        alert('Please enter maternal age');
    } else if (vagCs == null) {
        alert('Please specify birth type');
    } else if (apgar1 == null) {
        alert('Please enter digit for first APGAR selection');
    } else if (apgar2 == null) {
        alert('Please enter maternal rupture of membranes');
    } else if (hx == "") {
        alert('Please enter maternal history');
    } else if (maternalBloodType == null) {
        alert('Please enter maternal bloodtype');
    } else if (husCheck == '') {
        alert('Please check HUS');
    } else if (husText == "") {
        alert('Please enter HUS text');
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
    } else if (hepBDate == "") {
        alert('Please input date hepatitis B vaccine was received');
    } else if (newbornScreenDate == "") {
        alert('Please input date of Newborn Screen');
    } else if (cchdEchoText == "") {
        alert('Please input notes for CCHD/ECHO');
    } else if (eyeExamDate == "") {
        alert('Please input eye exam date');
    } else if (eyeExamText == "") {
        alert('Please input eye exam results');
    } else if (fuDate == "") {
        alert('Please input follow-up date');
    } else if (hearingCheck == "") {
        alert('Please check if patient has had hearing exam');
    } else if (carSeatCheck == "") {
        alert('Please check if patient needs carseat');
    } else if (cprCheck == "") {
        alert('Please check if parents have watched CPR video');
    } else if (circCheck == "") {
        alert('Please check if patient is circumsized');
    } else if (pivCheck == '') {
        alert('Please check PIV');
    } else if (piccCheck == "") {
        alert('Please check PICC');
    } else if (uacCheck == "") {
        alert('Please check UAC');
    } else if (uvcCheck == "") {
        alert('Please check for UVC');
    } else if (salineLockCheck == "") {
        alert('Please check for Saline Lock');
    } else if (drugInput == "") {
        alert('Please input drug used');
    } else if (ccDrug == "") {
        alert('Please enter CC for drug usage');
    } else if (hrDrug == "") {
        alert('Please enter drug amount per hour');
    } else if (tDrugInput == "") {
        alert('Please input TPN Drug used');
    } else if (ccTDrug == "") {
        alert('Please enter TPN CC for drug usage');
    } else if (hrTDrug == "") {
        alert('Please enter TPN drug amount per hour');
    } else if (ccIl == "") {
        alert('Please enter IL CC drug usage');
    } else if (hrIl == "") {
        alert('Please enter IL drug amount per hour');
    } else if (drugNotes == "") {
        alert('Please input notes regarding drugs');
    } else if (feedingMethod == null) {
        alert('Please select feeding method');
    } else if (adLib == "") {
        alert('Please check for ad lib');
    } else if (cueBased == "") {
        alert('Please check if patient is cue based feeding');
    } else if (fiCC == "") {
        alert('Please input food intake');
    } else if (hrCC == "") {
        alert('Please check food intake per hour');
    } else if (feedingAttempts == "") {
        alert('Please input feeding attempts');
    } else if (completedAttempts == "") {
        alert('Please enter completed feeding attempts');
    } else if (planOfCare == '') {
        alert('Please enter plan of care');
    } else if (socialConsiderations == "") {
        alert('Please enter social considerations');
    } else if (historyChanges == "") {
        alert('Please enter history/changes');
    } else if (referalls == '') {
        alert('Please input referalls');
    } else if (synagis == "") {
        alert('Please check synagis');
    } else if (vaccine == "") {
        alert('Please check vaccines');
    } else if (pediatrician == "") {
        alert('Please input pediatrician information');
    } else if (lastBath == "") {
        alert('Please input date for patients last bath');
    } else if (consent == "") {
        alert('Please check cooling patient consent');
    } else if (husCP == "") {
        alert('Please check cooling patient HUS');
    } else if (cpDate == "") {
        alert('Please enter cooling patient date');
    } else if (cpTime == "") {
        alert('Please enter cooling patient time');
    } else if (phototherapyStartDate == "") {
        alert('Please enter phototherapy start date');
    } else if (phototherapyEndDate == "") {
        alert('Please enter phototherapy end date');
    } else if (phototherapySelect == null) {
        alert('Please select phototherapy option');
    } else {
        const generalInformationObject = {
            loggedInUser,
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
            timeOfDischarge,
            gravida,
            para,
            age,
            vagCs,
            apgar1,
            apgar2,
            rom,
            hx,
            maternalBloodType,
            husCheck,
            husText,
            respiratoryOptions,
            respiratoryText,
            fio2,
            abdpb,
            murmur,
            echo,
            cardiacResults,
            meds,
            cbc,
            tb,
            bmp,
            crp,
            tg,
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
            radiologyText,
            hepBDate,
            newbornScreenDate,
            cchdEchoText,
            eyeExamDate,
            eyeExamText,
            fuDate,
            hearingCheck,
            carSeatCheck,
            cprCheck,
            circCheck,
            pivCheck,
            piccCheck,
            uacCheck,
            uvcCheck,
            salineLockCheck,
            drugInput,
            ccDrug,
            hrDrug,
            tDrugInput,
            ccTDrug,
            hrTDrug,
            ccIl,
            hrIl,
            drugNotes,
            feedingMethod,
            adLib,
            cueBased,
            fiCC,
            hrCC,
            feedingAttempts,
            completedAttempts,
            planOfCare,
            socialConsiderations,
            historyChanges,
            referalls,
            synagis,
            vaccine,
            pediatrician,
            lastBath,
            consent,
            husCP,
            cpDate,
            cpTime,
            phototherapyStartDate,
            phototherapyEndDate,
            phototherapySelect
        };
        console.log(generalInformationObject);
        $.ajax({
                type: 'POST',
                url: '/form/create',
                dataType: 'json',
                data: JSON.stringify(generalInformationObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
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
