'use strict';

const angular = require('angular');
const cinemagraphApp = angular.module('cinemagraphApp');

cinemagraphApp.controller('FullsizeController', ['$rootScope', '$routeParams', '$location', FullsizeController]);

function FullsizeController($rootScope, $routeParams, $location) {
  this.images = $rootScope.imageData;
  let id = Number.parseInt($routeParams.id);
  if (!this.isValidId(id)) {
    $location.path('/error');
  }
  this.image = this.images[id - 1];
}

FullsizeController.prototype = {
  isValidId: function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id - 1]) === 'undefined') return false;
    return true;
  }
};
