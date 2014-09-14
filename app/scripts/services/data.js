'use strict';

/**
 * @ngdoc service
 * @name chipsApp.data
 * @description
 * # data
 * Service in the chipsApp.
 */
angular.module('chipsApp')
  .service('data', function data() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.bankroll = 1000;
    this.winnings = 0;

    this.currentBet = 0;

  });
