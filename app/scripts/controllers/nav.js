'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the h3atApp
 */
 angular.module('h3atApp')
 .controller('NavCtrl', ['$scope','$location','$routeParams','USER_ROLES','AuthService', function ($scope,$location,$routeParams,USER_ROLES,AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.isAuthorized = AuthService.isAuthorized;

 	$scope.menu = [
 	{
 		title: 'Home',
 		link: '#/',
 		access: [USER_ROLES.all],
 		active: true
 	},
 	{
 		title: 'About',
 		link: '#/about',
 		access: [USER_ROLES.all],
 		active: false
 	},
 	{
 		title: 'Login',
 		link: '#/login',
 		access: [USER_ROLES.all],
 		active: false
 	}
 	];

 	$scope.toggleActive = function(link) {
 		console.log(link);
 		angular.forEach($scope.menu,function(e,i){
 			if(link === e.link){
 				e.active = true;
 			}else{
 				e.active = false;
 			}
 		});
 	}

 	$scope.toggleActive('#'+$location.url());
 }]);
