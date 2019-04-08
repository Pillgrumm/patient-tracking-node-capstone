// Triggers
function getPreviousEntries(userId) {
    $.ajax({
            type: 'GET',
            url: `/get-all-entries/${userId}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log(result);
            let htmlOutput = "<option value=''>Add new entry</option>";
            let formattedDataOutput = "";
            for (i = 0; i < result.entries.length; i++) {
                //                console.log(result.entries[i]._id);
                //                console.log(result.entries[i].firstName);
                //                console.log(result.entries[i].lastName);
                //                console.log(result.entries[i].addedToDB);
                formattedDataOutput = result.entries[i].addedToDB;
                let partsOfDataInput = formattedDataOutput.split('T');
                let dataOutputOnly = partsOfDataInput[0];
                let timeOutputOnly = partsOfDataInput[1];
                //                console.log(timeOutputOnly, dataOutputOnly);
                let splitDataOutputOnly = dataOutputOnly.split('-');
                let splitTimeOutputOnly = timeOutputOnly.split(':');
                htmlOutput += '<option value="' + result.entries[i]._id + '">' + splitDataOutputOnly[1] + '/' + splitDataOutputOnly[2] + '/' + splitDataOutputOnly[0] + ' ' + splitTimeOutputOnly[0] + ':' + splitTimeOutputOnly[1] + '(UTC)  ' + result.entries[i].firstName + ' ' + result.entries[i].lastName + '</option>';
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

function checkInputByValue(result, fieldName, expectedValue) {
    //console.log(result.entries[0][fieldName], expectedValue);
    if (result.entries[0][fieldName] == expectedValue) {
        //console.log($("input[value='" + expectedValue + "']"));
        $("input[value='" + expectedValue + "']").attr("checked", "checked");
    }
}

function prePopulateFormBasedOnEntryID(selectedEntryID) {
    console.log(selectedEntryID);
    $.ajax({
            type: 'GET',
            url: `/get-entry-by-id/${selectedEntryID}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log(result);
            $('.logged-in-user').val(result.entries[0].loggedInUser);
            $('.firstName').val(result.entries[0].firstName);
            $('.lastName').val(result.entries[0].lastName);
            $('.diagnosis').val(result.entries[0].diagnosis);
            $('.gestationalAge').val(result.entries[0].gestationalAge);
            $('.correctedGestationalAgeDay').val(result.entries[0].correctedGestationalAgeDay);
            $('.correctedGestationalAgeWeek').val(result.entries[0].correctedGestationalAgeWeek);
            $('.dayOfLife').val(result.entries[0].dayOfLife);
            $('.dayOfBirth').val(result.entries[0].dayOfBirth);
            $('.timeOfBirth').val(result.entries[0].timeOfBirth);
            $('.birthWeight').val(result.entries[0].birthWeight);
            $('.currentWeight').val(result.entries[0].currentWeight);
            $('.kaiserScore').val(result.entries[0].kaiserScore);
            $('.bloodType').val(result.entries[0].bloodType);
            $('.coombs').val(result.entries[0].coombs);
            $('.acuity').val(result.entries[0].acuity);
            $('.bedNumber').val(result.entries[0].bedNumber);
            $('.dateOfAdmission').val(result.entries[0].dateOfAdmission);
            $('.timeOfAdmission').val(result.entries[0].timeOfAdmission);
            $('.dateOfDischarge').val(result.entries[0].dateOfDischarge);
            $('.timeOfDischarge').val(result.entries[0].timeOfDischarge);
            $('.gravida').val(result.entries[0].gravida);
            $('.para').val(result.entries[0].para);
            $('.age').val(result.entries[0].age);
            $('.vagCs').val(result.entries[0].vagCs);
            $('.apgar1').val(result.entries[0].apgar1);
            $('.apgar2').val(result.entries[0].apgar2);
            $('.rom').val(result.entries[0].rom);
            $('.hx').val(result.entries[0].hx);
            //            $("input[name='husCheck']:checked").val(result.entries[0].husCheck);
            checkInputByValue(result, 'husCheck', 'husCheck');
            $('.husText').val(result.entries[0].husText);
            checkInputByValue(result, 'respiratoryOptions', 'RA');
            checkInputByValue(result, 'respiratoryOptions', 'VENT');
            checkInputByValue(result, 'respiratoryOptions', 'HFNC');
            checkInputByValue(result, 'respiratoryOptions', 'VT');
            checkInputByValue(result, 'respiratoryOptions', 'CPAP');
            //$("input[name='respiratory']:checked").val(result.entries[0].respiratoryOptions);
            $('.respiratoryText').val(result.entries[0].respiratoryText);
            $('.fio2').val(result.entries[0].fio2);
            $('.abdpb').val(result.entries[0].abdpb);
            //            $("input[name='murmur']:checked").val(result.entries[0].murmur);
            checkInputByValue(result, 'murmur', 'murmur');
            //            $("input[name='echo']:checked").val(result.entries[0].echo);
            checkInputByValue(result, 'echo', 'echo');
            $('.cardiacResults').val(result.entries[0].cardiacResults);
            $('.meds').val(result.entries[0].meds);
            $('.maternalBloodType').val(result.entries[0].maternalBloodType);
            //$("input[name='cbc']:checked").val(result.entries[0].cbc);
            checkInputByValue(result, 'cbc', 'cbc');
            //            $("input[name='tb']:checked").val(result.entries[0].tb);
            checkInputByValue(result, 'tb', 'tb');
            //            $("input[name='bmp']:checked").val(result.entries[0].bmp);
            checkInputByValue(result, 'bmp', 'bmp');
            //            $("input[name='crp']:checked").val(result.entries[0].crp);
            checkInputByValue(result, 'crp', 'crp');
            //            $("input[name='tg']:checked").val(result.entries[0].tg);
            checkInputByValue(result, 'tg', 'tg');
            $('.labsTestsText').val(result.entries[0].labsTestsText);
            $('.qtuLabs').val(result.entries[0].qtuLabs);
            //            $("input[name='troughCheck']:checked").val(result.entries[0].troughCheck);
            checkInputByValue(result, 'troughCheck', 'troughCheck');
            $('.troughText').val(result.entries[0].troughText);
            $('.dateOfTrough').val(result.entries[0].dateOfTrough);
            $('.timeOfTrough').val(result.entries[0].timeOfTrough);
            //            $("input[name='cxrCheck']:checked").val(result.entries[0].cxrCheck);
            checkInputByValue(result, 'cxrCheck', 'cxrCheck');
            $('.cxrDate').val(result.entries[0].cxrDate);
            //            $("input[name='kubCheck']:checked").val(result.entries[0].kubCheck);
            checkInputByValue(result, 'kubCheck', 'kubCheck');
            $('.kubDate').val(result.entries[0].kubDate);
            $('.radiologyText').val(result.entries[0].radiologyText);
            $('.hepBDate').val(result.entries[0].hepBDate);
            $('.newbornScreenDate').val(result.entries[0].newbornScreenDate);
            $('.cchdEchoText').val(result.entries[0].cchdEchoText);
            $('.eyeExamDate').val(result.entries[0].eyeExamDate);
            $('.eyeExamText').val(result.entries[0].eyeExamText);
            $('.fuDate').val(result.entries[0].fuDate);
            //            $("input[name='hearingCheck']:checked").val(result.entries[0].hearingCheck);
            checkInputByValue(result, 'hearingCheck', 'hearingCheck');
            //            $("input[name='carSeatCheck']:checked").val(result.entries[0].carSeatCheck);
            checkInputByValue(result, 'carSeatCheck', 'carSeatCheck');
            //            $("input[name='cprCheck']:checked").val(result.entries[0].cprCheck);
            checkInputByValue(result, 'cprCheck', 'cprCheck');
            //            $("input[name='circCheck']:checked").val(result.entries[0].circCheck);
            checkInputByValue(result, 'circCheck', 'circCheck');
            //            $("input[name='pivCheck']:checked").val(result.entries[0].pivCheck);
            checkInputByValue(result, 'pivCheck', 'pivCheck');
            //            $("input[name='piccCheck']:checked").val(result.entries[0].piccCheck);
            checkInputByValue(result, 'piccCheck', 'piccCheck');
            //            $("input[name='uacCheck']:checked").val(result.entries[0].uacCheck);
            checkInputByValue(result, 'uacCheck', 'uacCheck');
            //            $("input[name='uvcCheck']:checked").val(result.entries[0].uvcCheck);
            checkInputByValue(result, 'uvcCheck', 'uvcCheck');
            //            $("input[name='salineLockCheck']:checked").val(result.entries[0].salineLockCheck);
            checkInputByValue(result, 'salineLockCheck', 'salineLockCheck');
            $('.drugInput').val(result.entries[0].drugInput);
            $('.ccDrug').val(result.entries[0].ccDrug);
            $('.hrDrug').val(result.entries[0].hrDrug);
            $('.tDrugInput').val(result.entries[0].tDrugInput);
            $('.ccTDrug').val(result.entries[0].ccTDrug);
            $('.hrTDrug').val(result.entries[0].hrTDrug);
            $('.ccIl').val(result.entries[0].ccIl);
            $('.hrIl').val(result.entries[0].hrIl);
            $('.drugNotes').val(result.entries[0].drugNotes);
            $('.feedingMethod').val(result.entries[0].feedingMethod);
            //            $("input[name='adLib']:checked").val(result.entries[0].adLib);
            checkInputByValue(result, 'adLib', 'adLib');
            //            $("input[name='cueBased']:checked").val(result.entries[0].cueBased);
            checkInputByValue(result, 'cueBased', 'cueBased');
            $('.fiCC').val(result.entries[0].fiCC);
            $('.hrCC').val(result.entries[0].hrCC);
            $('.feedingAttempts').val(result.entries[0].feedingAttempts);
            $('.completedAttempts').val(result.entries[0].completedAttempts);
            $('.planOfCare').val(result.entries[0].planOfCare);
            $('.socialConsiderations').val(result.entries[0].socialConsiderations);
            $('.historyChanges').val(result.entries[0].historyChanges);
            $('.referalls').val(result.entries[0].referalls);
            //            $("input[name='synagis']:checked").val(result.entries[0].synagis);
            checkInputByValue(result, 'synagis', 'synagis');
            //            $("input[name='vaccine']:checked").val(result.entries[0].vaccine);
            checkInputByValue(result, 'vaccine', 'vaccine');
            $('.pediatrician').val(result.entries[0].pediatrician);
            $('.lastBath').val(result.entries[0].lastBath);
            //            $("input[name='consent']:checked").val(result.entries[0].consent);
            checkInputByValue(result, 'consent', 'consent');
            //            $("input[name='husCP']:checked").val(result.entries[0].husCP);
            checkInputByValue(result, 'husCP', 'husCP');
            $('.cpDate').val(result.entries[0].cpDate);
            $('.cpTime').val(result.entries[0].cpTime);
            $('.phototherapyStartDate').val(result.entries[0].phototherapyStartDate);
            $('.phototherapyEndDate').val(result.entries[0].phototherapyEndDate);
            $('.phototherapySelect').val(result.entries[0].phototherapySelect);
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

$(document).on('change', '.previous-entries-dropdown', function (event) {
    event.preventDefault();
    let selectedEntryID = $(".previous-entries-dropdown").val();
    $(".selected-entry-id").val(selectedEntryID);
    if (selectedEntryID != "") {
        prePopulateFormBasedOnEntryID(selectedEntryID);

    } else {
        $('.logged-in-user').val("");
        $('.selected-entry-id').val("");
        $('.firstName').val("");
        $('.lastName').val("");
        $('.diagnosis').val("");
        $('.gestationalAge').val("");
        $('.correctedGestationalAgeDay').val("");
        $('.correctedGestationalAgeWeek').val("");
        $('.dayOfLife').val("");
        $('.dayOfBirth').val("");
        $('.timeOfBirth').val("");
        $('.birthWeight').val("");
        $('.currentWeight').val("");
        $('.kaiserScore').val("");
        $('.bloodType').val("");
        $('.coombs').val("");
        $('.acuity').val("");
        $('.bedNumber').val("");
        $('.dateOfAdmission').val("");
        $('.timeOfAdmission').val("");
        $('.dateOfDischarge').val("");
        $('.timeOfDischarge').val("");
        $('.gravida').val("");
        $('.para').val("");
        $('.age').val("");
        $('.vagCs').val("");
        $('.apgar1').val("");
        $('.apgar2').val("");
        $('.rom').val("");
        $('.hx').val("");
        $("input[name='husCheck']:checked").attr({
            checked: false
        });
        $('.husText').val("");
        $("input[name='respiratory']:checked").attr({
            checked: false
        });
        $('.respiratoryText').val("");
        $('.fio2').val("");
        $('.abdpb').val("");
        $("input[name='murmur']:checked").attr({
            checked: false
        });
        $("input[name='echo']:checked").attr({
            checked: false
        });
        $('.cardiacResults').val("");
        $('.meds').val("");
        $('.maternalBloodType').val("");
        $("input[name='cbc']:checked").attr({
            checked: false
        });
        $("input[name='tb']:checked").attr({
            checked: false
        });
        $("input[name='bmp']:checked").attr({
            checked: false
        });
        $("input[name='crp']:checked").attr({
            checked: false
        });
        $("input[name='tg']:checked").attr({
            checked: false
        });
        $('.labsTestsText').val("");
        $('.qtuLabs').val("");
        $("input[name='troughCheck']:checked").attr({
            checked: false
        });
        $('.troughText').val("");
        $('.dateOfTrough').val("");
        $('.timeOfTrough').val("");
        $("input[name='cxrCheck']:checked").attr({
            checked: false
        });
        $('.cxrDate').val("");
        $("input[name='kubCheck']:checked").attr({
            checked: false
        });
        $('.kubDate').val("");
        $('.radiologyText').val("");
        $('.hepBDate').val("");
        $('.newbornScreenDate').val("");
        $('.cchdEchoText').val("");
        $('.eyeExamDate').val("");
        $('.eyeExamText').val("");
        $('.fuDate').val("");
        $("input[name='hearingCheck']:checked").attr({
            checked: false
        });
        $("input[name='carSeatCheck']:checked").attr({
            checked: false
        });
        $("input[name='cprCheck']:checked").attr({
            checked: false
        });
        $("input[name='circCheck']:checked").attr({
            checked: false
        });
        $("input[name='pivCheck']:checked").attr({
            checked: false
        });
        $("input[name='piccCheck']:checked").attr({
            checked: false
        });
        $("input[name='uacCheck']:checked").attr({
            checked: false
        });
        $("input[name='uvcCheck']:checked").attr({
            checked: false
        });
        $("input[name='salineLockCheck']:checked").attr({
            checked: false
        });
        $('.drugInput').val("");
        $('.ccDrug').val("");
        $('.hrDrug').val("");
        $('.tDrugInput').val("");
        $('.ccTDrug').val("");
        $('.hrTDrug').val("");
        $('.ccIl').val("");
        $('.hrIl').val("");
        $('.drugNotes').val("");
        $('.feedingMethod').val("");
        $("input[name='adLib']:checked").attr({
            checked: false
        });
        $("input[name='cueBased':checked]").attr({
            checked: false
        });
        $('.fiCC').val("");
        $('.hrCC').val("");
        $('.feedingAttempts').val("");
        $('.completedAttempts').val("");
        $('.planOfCare').val("");
        $('.socialConsiderations').val("");
        $('.historyChanges').val("");
        $('.referalls').val("");
        $("input[name='synagis']:checked").attr({
            checked: false
        });
        $("input[name='vaccine']:checked").attr({
            checked: false
        });
        $('.pediatrician').val("");
        $('.lastBath').val("");
        $("input[name='consent']:checked").attr({
            checked: false
        });
        $("input[name='husCP']:checked").attr({
            checked: false
        });
        $('.cpDate').val("");
        $('.cpTime').val("");
        $('.phototherapyStartDate').val("");
        $('.phototherapyEndDate').val("");
        $('.phototherapySelect').val("");
    }
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
                getPreviousEntries(result._id);
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
                getPreviousEntries(result._id);
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
    const selectedEntryID = $('.selected-entry-id').val();
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
    const cueBased = $("input[name='cueBased']").val();
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
        //if no entry was selected add new one
        console.log(selectedEntryID);
        if (selectedEntryID == "") {
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
        }
        //else update the existing one
        else {
            $.ajax({
                    type: 'PUT',
                    url: '/form/update/' + selectedEntryID,
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
        }

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
