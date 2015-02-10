'use strict';

describe('Directive: utility', function () {

  // load the directive's module
  beforeEach(module('h3atApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<utility></utility>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the utility directive');
  }));
});
