'use strict';

angular.module('myApp.chat', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chat', {
    templateUrl: 'views/chat/chat.html',
    controller: 'ChatCtrl'
  });
}])

.controller('ChatCtrl', [function() {

}]);