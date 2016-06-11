angular.module('jh-sample')

.directive('site', ['ticketService', function(ticketService) {
    return {
        restrict: 'E',
        templateUrl: "/app/modules/site/template.html",
        controller: function($scope) {

            $scope.myFunction = function() {
                
            }

            var dummydata = [
                {
                    location: "abc",
                    gueltig: date()
                }
            ]




            ticketService.get({id: 1})
                         .$promise
                         .then(function (result) {
                             alert(result);
                         });
        }
    };
}]);