'use strict';

describe('Filter: uppercase', function () {

  // load the filter's module
  beforeEach(module('yongularApp'));

  // initialize a new instance of the filter before each test
  var uppercase;
  beforeEach(inject(function ($filter) {
    uppercase = $filter('uppercase');
  }));

  it('should return the input prefixed with "uppercase filter:"', function () {
    var text = 'angularjs';
    expect(uppercase(text)).toBe('uppercase filter: ' + text);
  });

});
