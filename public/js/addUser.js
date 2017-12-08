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
    $(document).on("click", "#userSubmit", addUsers);


})
function addUsers() {
    
    console.log("addusers function");
    console.log($('#user_type option:selected').text());
    var userInput = {
        user_type: $('#user_type option:selected').text(),
        fname: $("#first_name").val(),
        lname: $("#last_name").val(),
        dob: $("#dob").val(),
        gender: $('#gender option:selected').text(),
        password: $("#password").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zipcode: $("#zipcode").val(),
        telephone: $("#telephone").val(),
        email: $("#email").val()
    };
    console.log(userInput);
    $.ajax({
        url: '/api/user',
        type: 'POST',
        data: userInput,

        success: function (userData) {
            console.log(userData);
        }
    });



};

function signIn() {
    console.log("SignIn function");

};