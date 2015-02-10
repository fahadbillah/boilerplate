'use strict';

/**
 * @ngdoc service
 * @name h3atApp.Constants
 * @description
 * # Constants
 * Constant in the h3atApp.
 */
 angular.module('h3atApp')
 .constant('AUTH_EVENTS', {
 	loginSuccess: 'auth-login-success',
 	loginFailed: 'auth-login-failed',
 	logoutSuccess: 'auth-logout-success',
 	sessionTimeout: 'auth-session-timeout',
 	notAuthenticated: 'auth-not-authenticated',
 	notAuthorized: 'auth-not-authorized'
 })
 .constant('USER_ROLES', {
 	all: '*',
 	admin: 'admin',
 	editor: 'editor',
 	guest: 'guest'
 });