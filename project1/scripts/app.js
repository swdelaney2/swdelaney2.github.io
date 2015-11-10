$ ("#playspace").hide();
$ ("#scores").hide();

var directionsListener = function(event) {
  if (event.keyCode == 32) {
    $( "#directions" ).hide();
startRound();
$(window).off("keyup", directionsListener);

  }}

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
$('#playspace').append('<div id="directions"></div>');
    $( "#directions" ).append('Welcome to the trivia game! This game contains ten questions. Player one, if you know the answer, buzz in by typing "Q." Player two, if you know the answer, buzz in by typing "P." <p>Got it? Great! Press "SPACE" to begin.');


// playing here

$(window).on("keyup", directionsListener);




// end play

// working listener
//     window.addEventListener('keyup', function(event) {
//   // look for specific keys to be pressed
//   if (event.keyCode == 32) {
//     $( "#directions" ).hide();
// startRound();
//   }
// });
//end working listener

}; // end of get names

$("#submitbutton").click(function() {
getNames();
});

$("#submitbuttonRoundPlayerOne").click(function() {
checkAnswerPlayerOne();
});

$("#submitbuttonRoundPlayerTwo").click(function() {
checkAnswerPlayerTwo();
});


}); // end

function startRound(){
  $('#playspace').append(round);
  $('#round').append(questionsAndAnswers.QuestionOne[0]);
  console.log('Space button pressed.');
  window.addEventListener('keyup', function(event) {

  if (event.keyCode == 81) { //Q, player one
    console.log('Player one has keyed in.');
  $('#round').append('<form id="formround"><div><label for="playerOneRound">Player 1 Answer:</label><input type="text" id="playerOneRound" /></div></form><p><div class="button"><button type="button" id="submitbuttonRoundPlayerOne">Submit</button></div>');
  }
  if (event.keyCode == 80) { //P, player two
  $('#round').append('<form id="formround"><div><label for="playerTwoRound">Player 2 Answer:</label><input type="text" id="playerTwoRound" /></div></form><p><div class="button"><button type="button" id="submitbuttonRoundPlayerTwo">Submit</button></div>');
};
});

};
function checkAnswerPlayerOne (){ // need to make for player two
  $ ("#formround").hide();
  var firstPlayerAnswer = $('#playerOneRound').val();
if (firstPlayerAnswer == questionsAndAnswers.QuestionOne[1]);
console.log('Player one should get a point here. Correct answer was ' + questionsAndAnswers.QuestionOne[1]);
};

var round = $('<div id=round>');
var firstPlayerScore = 0;
var secondPlayerScore = 0;
var questionsAndAnswers = {
  QuestionOne: ['Who is the current president?', 'Barack Obama'],
  QuestionTwo: ['What is my favorite color?', 'Green'],

}
