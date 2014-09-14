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
  		if ((data.bankroll - amt) >= 0) {
  			data.bankroll -= amt;
	  		data.currentBet += amt;
	  		$scope.bankroll = data.bankroll;
	    	$scope.currentBet = data.currentBet;
  		}
  	};

  	$scope.winMults = [
  		0, 1, 1.5, 2, 3, 5
  	];

  	$scope.win = function(mult) {
  		data.winnings -= data.currentBet;
  		var amt = data.currentBet * mult;
  		data.winnings += amt;
  		data.bankroll += amt;
  		data.currentBet = 0;
  		$scope.bankroll = data.bankroll;
    	$scope.winnings = data.winnings;
    	$scope.currentBet = data.currentBet;
  	};

    $scope.buyInAmts = [
  		100, 200, 500, 1000
  	];

    $scope.buyIn = function(amt) {
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
