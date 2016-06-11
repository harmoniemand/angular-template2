angular.module('jh-sample', ['ngAnimate', 'ngResource'])

    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.welcome = true;
        $scope.site = false;

        $scope.change = function () {
            $scope.welcome = !$scope.welcome;
            $scope.site = !$scope.site;
        }
    }])

    .directive('site', ['ticketService', function (ticketService) {
        return {
            restrict: 'E',
            templateUrl: "/app/modules/site/template.html",
            controller: function () {
                ticketService.get({ id: 1 })
                    .$promise
                    .then(function (result) {
                        alert(JSON.stringify(result));
                    });
            }
        };
    }])

    .directive('welcome', function () {
        return {
            restrict: 'E',
            templateUrl: "/app/modules/welcome/template.html"
        };
    })

    .factory('ticketService', ['$resource', function ($resource) {
        "use strict";

        return $resource(
            '/fake/ticket.json',
            {
                id: "@id"
            }, {
                update: {
                    method: 'GET'
                }
            });
    }]);