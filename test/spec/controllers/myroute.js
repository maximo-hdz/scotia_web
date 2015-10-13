'use strict';

describe('Controller: MyrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var MyrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyrouteCtrl = $controller('MyrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
