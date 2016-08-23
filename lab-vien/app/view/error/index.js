'use strict';

require('./error.scss');

const angular = require('angular');
const cinemagraphApp = angular.module('cinemagraphApp');

cinemagraphApp.controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}
