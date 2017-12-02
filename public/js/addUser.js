$(document).ready(function () {
    Materialize.updateTextFields();
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
    $(document).on("click", "#submit", userAdd);
});





function userAdd(){
    console.log("userAdd function");
};