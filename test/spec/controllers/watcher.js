'use strict';

describe('Controller: WatcherCtrl', function () {

  // load the controller's module
  beforeEach(module('yongularApp'));

  var WatcherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatcherCtrl = $controller('WatcherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WatcherCtrl.awesomeThings.length).toBe(3);
  });
});
