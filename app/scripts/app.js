'use strict';

/**
 * @ngdoc overview
 * @name chipsApp
 * @description
 * # chipsApp
 *
 * Main module of the application.
 */
angular
  .module('chipsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/buyin', {
        templateUrl: 'views/buyin.html',
        controller: 'MainCtrl'
      })
      .when('/bet', {
        templateUrl: 'views/bet.html',
        controller: 'MainCtrl'
      })
      .when('/win', {
        templateUrl: 'views/win.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
