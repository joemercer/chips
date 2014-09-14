'use strict';

describe('Filter: multiply', function () {

  // load the filter's module
  beforeEach(module('chipsApp'));

  // initialize a new instance of the filter before each test
  var multiply;
  beforeEach(inject(function ($filter) {
    multiply = $filter('multiply');
  }));

  it('should return the input prefixed with "multiply filter:"', function () {
    var text = 'angularjs';
    expect(multiply(text)).toBe('multiply filter: ' + text);
  });

});
