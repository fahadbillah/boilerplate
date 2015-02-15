'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the h3atApp
 */
 angular.module('h3atApp')
 .controller('LoginCtrl',['$scope','$cookies','AuthService', function ($scope,$cookies,AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.credentials = {
 		csrf_test_name: '',
 		username: '',
 		password: ''
 	};

 	var xsrf = $cookies['XSRF-TOKEN'];

 	$scope.login = function (credentials) {
 		$scope.credentials.csrf_test_name = xsrf;
 		AuthService.login(credentials).then(function (user) {
 			console.log(user);
 			// $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
 			// $scope.setCurrentUser(user);
 		}, function () {
 			// $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
 		});
 	};

 }]);
