'use strict';

const angular = require('angular');
const cinemagraphApp = angular.module('cinemagraphApp');

cinemagraphApp.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

function ThumbnailController($rootScope) {
  this.images = $rootScope.imageData;
}
