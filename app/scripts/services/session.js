'use strict';

/**
 * @ngdoc service
 * @name h3atApp.Session
 * @description
 * # Session
 * Service in the h3atApp.
 */
 angular.module('h3atApp')
 .service('Session', function () {
 	this.create = function (sessionId, userId, userRole) {
 		this.id = sessionId;
 		this.userId = userId;
 		this.userRole = userRole;
 	};
 	this.destroy = function () {
 		this.id = null;
 		this.userId = null;
 		this.userRole = null;
 	};
 	return this;
 });
