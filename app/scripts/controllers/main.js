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

    // # /bet

    $scope.raiseAmt = 0;

  	$scope.addToRaise = function(amt) {
  		if ((data.bankroll - amt) < 0) {
        // can't bet what you don't have
        return;
      }
      if (($scope.raiseAmt + amt) < 0) {
        // can't bet negative
        return;
      }
      if ($scope.bettingLocked) {
        // can't bet after you're done betting
        return;
      }

      $scope.raiseAmt += amt;
      $scope.bankroll -= amt;
  	};

    $scope.undoRaise = function() {
      $scope.bankroll += $scope.raiseAmt;
      $scope.raiseAmt = 0;
    };

    $scope.bettingLocked = false;
    $scope.lockBetting = function() {
      $scope.bettingLocked = !$scope.bettingLocked;

      data.currentBet += $scope.raiseAmt;
      data.winnings -= $scope.raiseAmt;
      $scope.currentBet = data.currentBet;
      $scope.winnings = data.winnings;

      data.bankroll = $scope.bankroll;

      $scope.raiseAmt = 0;
    };


    // # /win

    $scope.winAmt = 0;

    $scope.addToWin = function(amt) {
      $scope.winAmt += amt;
    };

    $scope.undoAddToWin = function() {
      $scope.winAmt = 0;
    };

  	$scope.win = function() {
      data.bankroll += $scope.winAmt;
  		data.winnings += $scope.winAmt;
  		$scope.bankroll = data.bankroll;
    	$scope.winnings = data.winnings;

      data.currentBet = 0;
      $scope.currentBet = data.currentBet;

      $scope.winAmt = 0;
  	};



    // # /buyIn

    $scope.buyInAmts = [
  		50, 100, 200, 500
  	];

    $scope.buyInAmt = data.bankroll;

    $scope.addToBuyInAmt = function(amt) {
      if ((data.bankroll + $scope.buyInAmt + amt) < 0) {
        // can't have a negative bankroll
        return;
      }
      $scope.buyInAmt += amt;
    };

    $scope.undoBuyIn = function() {
      $scope.buyInAmt = 0;
    };

    $scope.buyIn = function() {
      data.bankroll += $scope.buyInAmt;
      $scope.bankroll = data.bankroll;

      $scope.buyInAmt = 0;
    };


    // # Utilities

    $scope.reset = function() {
      $scope.raiseAmt = 0;
      $scope.buyInAmt = 0;

    	data.bankroll = 0;
    	data.winnings = 0;
    	data.currentBet = 0;
    	$scope.bankroll = data.bankroll;
    	$scope.winnings = data.winnings;
    	$scope.currentBet = data.currentBet;
    };


  });
