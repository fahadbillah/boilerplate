'use strict';

/**
 * @ngdoc service
 * @name h3atApp.AuthService
 * @description
 * # AuthService
 * Factory in the h3atApp.
 */
 angular.module('h3atApp')
 .factory('AuthService',['$http','Session', function ($http,Session) {
  var authService = {};

  authService.login = function (credentials) {
   return $http
   .post('api/index.php/auth/login', credentials)
   .then(function (res) {
     Session.create(res.data.id, res.data.user.id,
      res.data.user.role);
     return res.data.user;
   });
 };
 
 authService.isAuthenticated = function () {
   return !!Session.userId;
 };
 
 authService.isAuthorized = function (authorizedRoles) {
   if (!angular.isArray(authorizedRoles)) {
     authorizedRoles = [authorizedRoles];
   }
   return (authService.isAuthenticated() &&
     authorizedRoles.indexOf(Session.userRole) !== -1);
 };
 
 return authService;
}]);
