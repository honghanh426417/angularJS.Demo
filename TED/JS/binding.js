var myApp = angular.module('myModule', []);
myApp.controller('myController', function($scope){
    var employee = {
        FirstName :"Mark",
        LastName: "Hastings",
        Gender: "Male"
    }
    $scope.employee = employee;
})