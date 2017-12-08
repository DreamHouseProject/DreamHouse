$(document).ready(function(){
    $("#navHeader").load("../header.html");
    $("#footer").load("../footer.html");
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
    $('#modal1').modal();
    $('.parallax').parallax();
    $(document).on("click", "#newUser", getUsers);
    $(document).on("click", "#signIn", signIn);
    $(document).on("click", "#submit", addUsers);

    
})
function addUsers() {
    console.log("addusers function");
    var userInput = {
        user_type: "Buyer",
        fname: "Sri",
        lname: "req.body.lname",
        dob: "1/1/1976",
        gender: "Male",
        password: "abcd",
        city: "pittsburg",
        state: "CA",
        zipcode: 94565,
        telephone: 9252030972,
        email: "ding@dong.com"
    };

    $.ajax({
        url: '/api/user',
        type: 'POST',
        dataSet: JSON,
        data: { userInput },

        success: function (userData) {
            console.log(userData);
        }
    });



};

function signIn() {
    console.log("SignIn function");

};
function getUsers() {
    console.log("SignIn function");

};