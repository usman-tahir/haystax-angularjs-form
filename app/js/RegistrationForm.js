
var app = angular.module("RegistrationForm", []);

app.controller("FormController", ["$scope", function($scope) {
    $scope.email = {
        text: ""
    };

    $scope.phoneNumberRegex = "/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im";
}]);