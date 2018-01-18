
var app = angular.module("RegistrationForm", ["ui.bootstrap.modal"]);

app.controller("FormController", ["$scope", function($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.phone = "";

    $scope.submit = function() {
        $scope.showModal = true;
    };

    $scope.ok = function() {
        $scope.showModal = false;
    };

    $scope.cancel = function() {
        $scope.showModal = false;
    };
}]);