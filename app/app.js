angular.module('jh-sample', ['ngAnimate','jh-sample-welcome','jh-sample-site'])

.controller('mainCtrl', ['$scope', function($scope) {
    $scope.welcome = true;
    $scope.site = false;

    $scope.change = function() {
        $scope.welcome = !$scope.welcome;
        $scope.site = !$scope.site;
    }
}]);