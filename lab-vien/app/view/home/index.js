'use strict';

const angular = require('angular');
const cinemagraphApp = angular.module('cinemagraphApp');

cinemagraphApp.controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope) {
  this.images = $rootScope.imageData;
}
