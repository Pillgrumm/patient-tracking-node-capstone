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
    event.preventDefault();
    $(this).parent().find(".icon-content-info").show();
    $(".icon-content-error").hide();

});

$(document).on('blur', 'input', function (event) {
    event.preventDefault();
    $(this).parent().find(".icon-content-info").hide();
    $(this).parent().find(".icon-content-error").show();

});
$(document).on('click', '.legend-show', function (event) {
    event.preventDefault();
    console.log('inside legend show');
         $(this).parent().find(".legend-show").hide();
         $(this).parent().find(".legend-hide").show();
        $(this).parent().parent().find(".section-content").show();
  });

  $(document).on('click', '.legend-hide', function (event) {
    event.preventDefault();
    console.log('inside legend hide');
         $(this).parent().find(".legend-hide").hide();
         $(this).parent().find(".legend-show").show();
        $(this).parent().parent().find(".section-content").hide();
  });

//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
