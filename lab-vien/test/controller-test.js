'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('cinemagraphApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
      this.errorController = new $controller('ErrorController');
      this.thumbnailController = new $controller('ThumbnailController');

    });
  });

  it('home controller should create a list of messages', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(4);

    expect(this.fullsizeController.images.length > 0).toEqual(true);
    expect(this.fullsizeController.images.length).toEqual(4);

    expect(this.thumbnailController.images.length > 0).toEqual(true);
    expect(this.thumbnailController.images.length).toEqual(4);

    expect(this.errorController.errorMessage).toEqual('Error trying to access unknown page');
  });
});
