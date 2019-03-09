// Triggers


//when the page loads...
$(document).ready(function () {
    //do stuff
    $(".icon-content").hide();
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

$(".show-hide").click(function(){
    $(".section-content").toggle(function(){
        $(".show-hide").text("+");
    }, function(){
        $(".show-hide").text("-");
    });
  });


//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
