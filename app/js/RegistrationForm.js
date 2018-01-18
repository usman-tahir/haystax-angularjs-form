
var app = angular.module("RegistrationForm", []);

app.controller("FormController", ["$scope", function($scope) {
    $scope.email = {
        text: ""
    };
}]);