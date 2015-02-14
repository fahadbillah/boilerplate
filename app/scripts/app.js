'use strict';

/**
 * @ngdoc overview
 * @name h3atApp
 * @description
 * # h3atApp
 *
 * Main module of the application.
 */
 angular
 .module('h3atApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(['$routeProvider','USER_ROLES', function ($routeProvider,USER_ROLES) {
   $routeProvider
   .when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     data: {
      authorizedRoles: [USER_ROLES.all]
    }
  })
   .when('/about', {
     templateUrl: 'views/about.html',
     controller: 'AboutCtrl',
     data: {
      authorizedRoles: [USER_ROLES.all]
    }
  })
   .when('/login', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl',
     data: {
      authorizedRoles: [USER_ROLES.all]
    }
  })
   .when('/registration', {
     templateUrl: 'views/registration.html',
     controller: 'RegistrationCtrl'
   })
   .when('/registration/:referral', {
     templateUrl: 'views/registration.html',
     controller: 'RegistrationCtrl'
   })
   .otherwise({
     redirectTo: '/'
   });
 }])
 .run(['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
   $rootScope.$on('$stateChangeStart', function (event, next) {
     var authorizedRoles = next.data.authorizedRoles;
     if (!AuthService.isAuthorized(authorizedRoles)) {
       event.preventDefault();
       if (AuthService.isAuthenticated()) {
         // user is not allowed
         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
       } else {
         // user is not logged in
         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
       }
     }
   });
 }]);
