'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the h3atApp
 */
 angular.module('h3atApp')
 .controller('RegistrationCtrl',['$scope','$http','$cookies', function ($scope,$http,$cookies) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	console.log($cookies['XSRF-TOKEN']);

 	$scope.clicked = false;
 	$scope.credentials = {
 		csrf_test_name : '',
 		first_name : '',
 		last_name : '',
 		email : '',
 		phone : '',
 		address : '',
 		password : '',
 		repassword : ''
 	};

 	var xsrf = $cookies['XSRF-TOKEN'];

 	$scope.returnedMessage;

 	$scope.registrationSubmit = function() {

 		$scope.credentials.csrf_test_name = xsrf;

 		var credentials = $.param($scope.credentials);

 		$scope.clicked = true;

 		$http.post('api/index.php/auth/registration', credentials, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			$scope.returnedMessage = data;

 			$scope.credentials = {
 				csrf_test_name : '',
 				first_name : '',
 				last_name : '',
 				email : '',
 				phone : '',
 				address : '',
 				password : '',
 				repassword : ''
 			};

 			$scope.registration.$setPristine();
 			$scope.clicked = false;
 		})
 		.error(function(data) {
 			console.log(data);
 			$scope.clicked = false;
 		});
 	}

 }]);
