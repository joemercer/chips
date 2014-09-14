'use strict';

/**
 * @ngdoc filter
 * @name chipsApp.filter:multiply
 * @function
 * @description
 * # multiply
 * Filter in the chipsApp.
 */
angular.module('chipsApp')
  .filter('multiply', function () {
    return function (a, b) {
      return a*b;
    };
  });
