angular.module('jh-sample-site', [])

.directive('site', function() {
    return {
        restrict: 'E',
        templateUrl: "/app/modules/site/template.html"
    };
});