
var myApp = angular.module("myApp", []);


myApp.controller("TextAreaWithLimitCtrl", ['$scope', function($scope) {
    var MAX_LEN = 70;
    var WARN_THRESHOLD = 10;

    $scope.message = '';

    $scope.remaining = function() {
        var remain = MAX_LEN - $scope.message.length;
        return remain > 0 ? remain : 0;
    };

    $scope.hasValidLength = function() {
        return MAX_LEN >= $scope.message.length;
    };

    $scope.shouldWarn = function() {
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.clean = function() {
        $scope.message = '';
    };
}]);
