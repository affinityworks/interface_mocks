$(document).ready(function(){   

    Swag.registerHelpers(window.Handlebars);

    var template = Handlebars.compile($("#groups-page-template").html());
    $("#content").append(template(data.group));

    $(".group_signup_form-phone-container").hide();
    $(".group_signup_form-name-container").hide();

    $( "#group_signup_form-email").keyup(function() {
        $(".group_signup_form-phone-container").show();
        $(".group_signup_form-name-container").show();
        return false;
    });

    $(".group_signup_form-note-container").hide();
    $( "#group_signup_form-volunteer").click(function() {
        $(".group_signup_form-note-container").show();
    });




});