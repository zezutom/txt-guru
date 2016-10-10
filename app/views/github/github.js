'use strict';

angular.module('myApp.github', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/github', {
    templateUrl: 'views/github/github.html',
    controller: 'GitHubCtrl'
  });
}])

.controller('GitHubCtrl', [function() {

}]);