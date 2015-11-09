$ ("#playspace").hide();
$ ("#scores").hide();


$(document).ready(function(){ // start

function getNames () {
  var firstPlayer = $('#playerOneName').val();
   var secondPlayer = $('#playerTwoName').val();
 console.log('The first player is ' + firstPlayer);
  console.log('The second player is ' + secondPlayer);
  $ ("#nameForm").hide();
  $ ("#playspace").fadeIn();
  $ ("#scores").fadeIn();
  $( "#scores" ).append(firstPlayer + ': ' + firstPlayerScore + '   (Player One)<p>' + secondPlayer + ': ' + secondPlayerScore + '   (Player Two)');
    $( "#playspace" ).append('Welcome to the trivia game! This game contains ten questions. Player one, if you know the answer, buzz in by typing "Q." Player two, if you know the answer, buzz in by typing "P." <p>Got it? Great! Press "SPACE" to begin.');
    window.addEventListener('keyup', function(event) {
  // look for specific keys to be pressed
  if (event.keyCode == 32) {
    console.log('Space button pressed.');
  }
});
};

$("#submitbutton").click(function() {
getNames();
});






}); // end

var firstPlayerScore = 0;
var secondPlayerScore = 0;
