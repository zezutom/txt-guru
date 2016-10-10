'use strict';

angular.module('myApp.analysis', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/analysis', {
            templateUrl: 'views/analysis/analysis.html',
            controller: 'AnalysisCtrl'
        });
    }])

    .controller('AnalysisCtrl', [function() {

    }]);