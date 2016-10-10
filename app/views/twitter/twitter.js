'use strict';

angular.module('myApp.twitter', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/twitter', {
    templateUrl: 'views/twitter/twitter.html',
    controller: 'TwitterCtrl'
  });
}])

.controller('TwitterCtrl', [function() {

}]);