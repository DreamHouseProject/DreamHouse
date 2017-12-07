$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var address = 94104;

    $.ajax({
        url: '/school',
        method: "GET",
        dataType: "json",
        data:{search:address}
    }).done(function (response) {
        console.log(response)
    })
})
