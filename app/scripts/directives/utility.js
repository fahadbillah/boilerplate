'use strict';

/**
 * @ngdoc directive
 * @name h3atApp.directive:utility
 * @description
 * # utility
 */
 angular.module('h3atApp')
 .directive('utility', function () {
 	return {
 		template: '<div></div>',
 		restrict: 'E',
 		link: function postLink(scope, element) {
 			element.text('this is the utility directive');
 		}
 	};
 })
 .directive('formAutofillFix', ['$timeout', function ($timeout) {
 	return function (scope, element, attrs) {
 		element.prop('method', 'post');
 		if (attrs.ngSubmit) {
 			$timeout(function () {
 				element
 				.unbind('submit')
 				.bind('submit', function (event) {
 					event.preventDefault();
 					element
 					.find('input, textarea, select')
 					.trigger('input')
 					.trigger('change')
 					.trigger('keydown');
 					scope.$apply(attrs.ngSubmit);
 				});
 			});
 		}
 	};
 }]);
