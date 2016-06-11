angular.module('jh-sample-welcome', [])

.directive('welcome', function() {
    return {
        restrict: 'E',
        templateUrl: "/app/modules/welcome/template.html" 
    };
});