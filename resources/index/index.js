var app = angular.module("mySite", []);

app.controller("titleBar", function ($scope) {
    $scope.go = function (path) {
        location.href = "/" + path + ".html";
    };
});