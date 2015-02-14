'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the h3atApp
 */
 angular.module('h3atApp')
 .controller('ApplicationCtrl',['$scope','$http','USER_ROLES','AuthService', function ($scope,$http,USER_ROLES,AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.currentUser = null;
 	$scope.userRoles = USER_ROLES;
 	$scope.isAuthorized = AuthService.isAuthorized;

 	$scope.setCurrentUser = function (user) {
 		$scope.currentUser = user;
 	};

 	$http.get('api/index.php/auth')
 	.success(function(data) {
 		console.log(data);
 	})
 	.error(function(data) {
 		console.log(data);
 	})

 }]);
