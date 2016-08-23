'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('cinemagraphApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
    });
  });

  it('home controller should create a list of messages', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(4);
  });
});
