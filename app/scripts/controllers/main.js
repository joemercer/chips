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
