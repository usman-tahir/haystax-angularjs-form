
var app = angular.module("RegistrationForm", ["ui.bootstrap.modal"]);

app.controller("FormController", ["$scope", function($scope) {
    $scope.name
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

    // Naive reset
    $scope.reset = function(form) {
        $scope.name = "";
        $scope.email = "";
        $scope.password = "";
        $scope.phone = "";
        form.$setPristine();
        form.$setUntouched();
    };
}]);