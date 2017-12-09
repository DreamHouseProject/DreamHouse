$(document).ready(function () {
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
    $(document).on("click", "#searchSF", search);
    $(document).on("click", "#searchSD", search);
    // search();
    
});



// });
function search() {
    $("#listing-row").empty();
    // event.preventDefault();
    console.log("in listingsData")
    var str = $(this).text().trim();
    if (str === "searchSan Francisco") {
        str = "SanFrancisco"
    } else {
        str = "SanDiego"
    }
    // var res = str.substr(6);
    // q = q.slice(6)
    $.ajax({
        url: '/api/search',
        type: 'GET',
        data: { query: str },
        dataSet: JSON,
        success: function (listData) {
            console.log(listData);
            // var listAddress = listData[0].hAddress;
            var imagePath = "https://i.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085--open-floor-house-plans-dream-house-plans.jpg";

            for (i = 0; i < listData.length; i++) {
                listItem(listData[i].listPrice, imagePath)
            }
        }
    });
// });
}
// Function for 
function listItem(listAddress, imagePath) {
    var listingRow = $("#listing-row");
    var listingCol = $("<div>");
    listingCol.attr("id", "listing-col");
    listingCol.addClass("col s3 m3");
    var divCard = $("<div>");
    divCard.addClass("card");
    var divCardImg = $("<div>");
    divCardImg.addClass("card-image");
    var image = $("<img>");
    image.addClass("responsive-img");
    image.attr("src", imagePath);
    image.attr("href",listAddress);
    // <span class="card-title">Card Title</span>
    var cardTitle = $("<span>");
    cardTitle.addClass("card-title");
    cardTitle.text("List Price: " + listAddress);

    divCardImg.append(image);
    divCardImg.append(cardTitle);
    divCard.append(divCardImg);
    listingCol.append(divCard);
    listingRow.append(listingCol)
}