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
    $('.parallax').parallax();
    $(document).on("click", "#newUser", getUsers);
    $(document).on("click", "#signIn", signIn);
    $(document).on("click", "#submit", addUsers);

});

(function () {
    'use strict';
    // angular
    //     .module('myapp', ['ngMaterial'])
    //     .controller('AppCtrl', AppCtrl);
    var myapp = angular.module('dreamhouse', ['ngMaterial']);
    // angular.controller('AppCtrl', AppCtrl); 

    myapp.controller('AppCtrl', ['$scope', '$log', function ($scope, $log) {
        var tabs = [
            //{ title: 'Zero'  }
        ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
        $scope.$watch('selectedIndex', function (current, old) {
            previous = selected;
            selected = tabs[current];
            if (old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            if (current + 1) $log.debug('Hello ' + selected.title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            console.log(title)
            for (var i = 0; i < view; i++) {
                title = 'Room ' + i;
                tabs.push({ title: title, content: view, disabled: false });
                console.log("inside addtab " + i)
            }

        };
        $scope.removeTab = function (tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
        this.userState = '';
        this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
        this.userSex = '';
        this.sex = ('Male Female other')
            .split(' ').map(function (sex) { return { abbrev: sex }; });

        this.userType = '';
        this.userTypes = ('Buyer Seller Broker Admin')
            .split(' ').map(function (userType) { return { abbrev: userType }; });

    }]);



})();


function getUsers(){
   
    console.log(this)
    
    

};
function addUsers(){
    console.log("addusers function");
    var userInput = {
        user_type: "Buyer" ,
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
         dataSet : JSON,
         data: { userInput  },

        success: function (userData) {
            console.log(userData);
        }
    });



};

function signIn() {
    console.log("SignIn function");

};