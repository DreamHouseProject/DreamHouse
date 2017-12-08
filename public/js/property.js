$(document).ready(function () {
    Materialize.updateTextFields();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date,
    });
    $('.parallax').parallax();
    $(document).on("click", "#newUser", newUser);
    $(document).on("click", "#signIn", signIn);
    $(document).on("click", "#addProperty", addProperty);


});
function addProperty() {

    console.log("addProperty function");
    console.log($('#property_type option:selected').text());
    var propertyInput = {
        
        property_type: $('#property_type option:selected').text(),
        city: $("#city").val(),
        state: $("#state").val(),
        zipcode: $("#zipcode").val(),
        country: $("#country").val(),
        property_date: $("#property_date").val(),
        no_of_rooms: $("#no_of_rooms").val(),
        room_name: $("#room_name").val(),
        area_size: $("#area_size").val(),
        per_unit_price: $("#price_per_unit").val(),
        plot_num: $("#plot_num").val(),
        floor_num: $("#floor_num").val(),
        area: $("#area").val(),
        images: $("#images").val(),
    };

    console.log(propertyInput);
    $.ajax({
        url: '/api/property',
        type: 'POST',
        data: propertyInput,

        success: function (propertyData) {
            console.log(propertyData);
        }
    });



};

function signIn() {
    console.log("SignIn function");

};