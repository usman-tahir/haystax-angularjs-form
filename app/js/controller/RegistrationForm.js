
let app = angular.module("RegistrationForm", [])

app.controller("RegistrationFormController", ($scope) => {
    $scope.email = ""
    $scope.password = ""
    $scope.phone = ""
})