'use strict';

/**
 * @ngdoc function
 * @name chipsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chipsApp
 */
angular.module('chipsApp')
  .controller('MainCtrl', function ($scope, data) {

    $scope.bankroll = data.bankroll;
    $scope.winnings = data.winnings;
    $scope.currentBet = data.currentBet;

    $scope.bettingAmts = [
  		1, 5, 10, 25, 100
  	];

  	$scope.bet = function(amt) {
  		if ((data.bankroll - amt) < 0) {
        // can't bet what you don't have
        return;
      }
      if ((data.currentBet + amt) < 0) {
        // can't bet negative
        return;
      }
      if ($scope.done) {
        // can't bet after you're done betting
        return;
      }

			data.bankroll -= amt;
      data.winnings -= amt;
  		data.currentBet += amt;
  		$scope.bankroll = data.bankroll;
      $scope.winnings = data.winnings;
    	$scope.currentBet = data.currentBet;
  	};

    $scope.done = false;
    $scope.lock = function() {
      $scope.done = !$scope.done;
    };

    $scope.resetBet = function() {
      data.currentBet = 0;
      $scope.currentBet = data.currentBet;
    };

  	$scope.win = function(amt) {
  		data.winnings += amt;
  		data.bankroll += amt;
  		data.currentBet -= amt;
  		$scope.bankroll = data.bankroll;
    	$scope.winnings = data.winnings;
    	$scope.currentBet = data.currentBet;
  	};

    $scope.buyInAmts = [
  		100, 200, 500, 1000
  	];

    $scope.buyIn = function(amt) {
      if ((data.bankroll + amt) < 0) {
        // can't have a negative bankroll
        return;
      }
    	data.bankroll += amt;
    	$scope.bankroll = data.bankroll;
    };

    $scope.reset = function() {
    	data.bankroll = 0;
    	data.winnings = 0;
    	data.currentBet = 0;
    	$scope.bankroll = data.bankroll;
    	$scope.winnings = data.winnings;
    	$scope.currentBet = data.currentBet;
    };


  });
