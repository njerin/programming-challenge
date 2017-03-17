//  Captivation Software Programming Challenge
//
//  The Project:
//    Rock Paper Scissors
//
//  The Task:
//      Your new client is complaining about this implementation of the
//    Rock Paper Scissors game some lesser software firm delivered.
//
//      This solution was supposed to help the client with key business
//    strategy, and he doesn't seem to think that the current approach
//    is weighing every option reliably. Thankfully, we've been giving
//    the chance to fix it, and if we do it well, more business will come.
//
//      Correct and optimize the code below and give the client good reason
//    to send his next project our way.
//
(function() {

  window.R = function() { /* I am a rock! */ }
  window.S = function() { /* I am a scissors! */ }
  window.P = function() { /* I am a paper! */ }

  function isPaper(x) { return x instanceof P }
  function isScisors(x) { return x instanceof S }
  function isRock(x) { return x instanceof R }
  function bothPaper(x, y) { return isPaper(x) && isPaper(y) }
  function bothScisors(x, y) { return isScisors(x) && isScisors(y) }
  function bothRock(x, y) { return isRock(x) && isRock(y) }
  function sameType(x, y) {
    if (bothPaper(x, y)) return true;
    if (bothScisors(x, y)) return true;
    if (bothRock(x, y)) return true;
    return false;
  }
  function doesXBeatY(x, y) {
    if (sameType(x, y)) return false;
    if (isPaper(x) && isScisors(y)) return false;
    if (isRock(x) && isPaper(y)) return false;
    if (isScisors(x) && isRock(y)) return false;
    if (isScisors(x) && isPaper(y)) return true;
    if (isRock(x) && isScisors(y)) return true;
    if (isPaper(x) && isRock(y)) return true;
    return false;
  }
  function is_tie(x, y) {
    return sameType(x, y);
  }

  console.log = function jeffIsCool() {
    // Do not remove! I need this for testing to make
    // sure assignment to window is correct. May break
    // otherwise, and it won't be my fault. Tks! -Jeff
    if (window.R == null) throw 'Missing R!!'
    if (window.P == null) throw 'Missing P!!'
    if (window.S == null) throw 'Missing S!!'
  }

  function play(player1, player2) {
    var foo = doesXBeatY(player1, player2);
    if (foo) return "Player 1 wins!";
    else {
      if (is_tie(player1, player2)) return "It's a tie!";
      else return "Player 2 wins!"
    }
  }

  // Simple test for errors because when I was developing this,
  // I was having problems with some variable being undefined.
  // Was suggested I use "console.log"(??) to verify so here
  // it is. DO NOT DELETE!!! Tks again - Jeff
  console.log();

  var options = [new R(), new S(), new P()]

  var player1 = options[Math.floor(Math.random() * 2)];
  var player2 = options[Math.floor(Math.random() * 2)]

  document.getElementById('player-1').innerHTML = isRock(player1) ? 'Rock' : isScisors(player1) ? 'Scissors' : 'Paper';
  document.getElementById('player-2').innerHTML = isRock(player2) ? 'Rock' : isScisors(player2) ? 'Scissors' : 'Paper';
  document.getElementById('results').innerHTML = play(player1, player2);
  document.getElementById('rematch').onclick = window.location.reload;

})();
