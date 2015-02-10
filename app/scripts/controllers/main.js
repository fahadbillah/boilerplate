'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the h3atApp
 */
angular.module('h3atApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
