'use strict';

/**
 * @ngdoc function
 * @name chipsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chipsApp
 */
angular.module('chipsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
