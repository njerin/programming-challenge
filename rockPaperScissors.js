var app = angular.module('app', []);
app.controller('myCtrl', function ($scope) {
    $scope.hi = "Connected Again!";
    $scope.playerName;
    $scope.playerSelected;
    $scope.playerCount = 0;
    $scope.tiesCount = 0;
    $scope.computerSelected;
    $scope.computerCount = 0;
    $scope.isVisible;
    
    $scope.player = function() {
        $scope.isVisible = true;
        var name = prompt("Enter Your Name:");
        while (!name) {
            alert("You didnot enter your name!");
            name = prompt("Please Enter Your Name:");
        }
        $scope.playerName = name.toUpperCase();
    };
    $scope.selectedRock = function() {
        $scope.playerSelected = "Rock";
        $scope.computer();
        if($scope.computerSelected == "Rock") {
            $scope.tiesCount++;
        } else if($scope.computerSelected == "Scissors") {
            $scope.playerCount++;
        } else {
            $scope.computerCount++;
        }
    };
    $scope.selectedPaper = function() {
        $scope.playerSelected = "Paper";
        $scope.computer();
        if($scope.computerSelected == "Paper") {
            $scope.tiesCount++;
        } else if($scope.computerSelected == "Rock") {
            $scope.playerCount++;
        } else {
            $scope.computerCount++;
        }
    };
    $scope.selectedScissors = function() {
        $scope.playerSelected = "Scissors";
        $scope.computer();
        if($scope.computerSelected == "Scissors") {
            $scope.tiesCount++;
        } else if($scope.computerSelected == "Paper") {
            $scope.playerCount++;
        } else {
            $scope.computerCount++;
        }
    };
    $scope.computer = function() {
        var options = ['Rock', 'Paper', 'Scissors'];
        $scope.computerSelected = options[Math.floor(Math.random() * options.length)];
    };
    $scope.restartGame = function() {
        $scope.playerSelected = "";
        $scope.computerSelected = "";
        $scope.playerCount = 0;
        $scope.tiesCount = 0;
        $scope.computerCount = 0;
    };
    $scope.quitGame = function() {
        $scope.isVisible = false;
        $scope.playerSelected = "";
        $scope.computerSelected = "";
        $scope.playerCount = 0;
        $scope.tiesCount = 0;
        $scope.computerCount = 0;
    };
});