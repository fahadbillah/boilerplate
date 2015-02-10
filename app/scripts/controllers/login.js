'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the h3atApp
 */
 angular.module('h3atApp')
 .controller('LoginCtrl',['$scope','AuthService', function ($scope,AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.credentials = {
 		username: '',
 		password: ''
 	};
 	$scope.login = function (credentials) {
 		AuthService.login(credentials).then(function (user) {
 			console.log(user);
 			// $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
 			// $scope.setCurrentUser(user);
 		}, function () {
 			// $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
 		});
 	};

 }]);
