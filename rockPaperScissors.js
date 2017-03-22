var app = angular.module('app', []);
app.controller('myCtrl', function ($scope) {
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
    $scope.play = function(res) {
        $scope.playerSelected=res;
        $scope.computer();        
        if($scope.playerSelected=="Rock" && $scope.computerSelected=="Paper") {
            $scope.computerCount++;
        } else if($scope.playerSelected=="Rock" && $scope.computerSelected=="Scissors") {
            $scope.playerCount++;
        } else if($scope.playerSelected=="Paper" && $scope.computerSelected=="Scissors") {
            $scope.computerCount++;
        } else if($scope.playerSelected=="Paper" && $scope.computerSelected=="Rock") {
            $scope.playerCount++;
        } else if($scope.playerSelected=="Scissors" && $scope.computerSelected=="Rock") {
            $scope.computerCount++;
        } else if($scope.playerSelected=="Scissors" && $scope.computerSelected=="Paper") {
            $scope.playerCount++;
        } else {
            $scope.tiesCount++;
        }
    };
    $scope.computer = function() {
        var options = ['Rock', 'Paper', 'Scissors'];
        $scope.computerSelected = options[Math.floor(Math.random() * options.length)];
    };
    $scope.restartGame = function() {
        $scope.reset();
    };
    $scope.quitGame = function() {
        $scope.isVisible = false;
        $scope.reset();        
    };
    $scope.reset = function(){
        $scope.playerSelected = "";
        $scope.computerSelected = "";
        $scope.playerCount = 0;
        $scope.tiesCount = 0;
        $scope.computerCount = 0;
    };
});