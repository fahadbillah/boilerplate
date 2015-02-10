'use strict';

/**
 * @ngdoc function
 * @name h3atApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the h3atApp
 */
angular.module('h3atApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
