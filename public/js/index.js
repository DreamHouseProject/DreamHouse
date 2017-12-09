$(document).ready(function(){
    // $("#navHeader").load("../header.html");
    // $("#footer").load("../footer.html");
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
    // $(document).on("click", "#newUser", newUserModal);
    // $(document).on("click", "#signIn", signIn);
    // $(document).on("click", "#submit", addUsers);
    $(document).on("click", "#searchSF", search);
    $(document).on("click", "#searchSD", search);
    

    
})

function search(event){
    event.preventDefault();
    console.log("in listingsData")
    var str = $(this).text().trim(); 
    if (str=== "searchSan Francisco"){
        str = "SanFrancisco"
    }else{
        str = "SanDiego"
    }
    // var res = str.substr(6);
    // q = q.slice(6)
    $.ajax({
        url: '/api/search',
        type: 'GET',
        data: {query:str},
        dataSet: JSON,
        success: function (listData) {
            console.log(listData);

        }
    });
};
