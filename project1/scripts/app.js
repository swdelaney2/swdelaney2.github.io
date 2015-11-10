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

$(window).on("keyup", directionsListener);

/* old listener for reference. no longer needed / has been replaced.

    window.addEventListener('keyup', function(event) {
  // look for specific keys to be pressed
  if (event.keyCode == 32) {
    $( "#directions" ).hide();
startRound();
  }
});

end working listener */

}; // end of get names

$("#submitbutton").click(function() {
getNames();
});

}); // end of onload

function startRound(){
  $('#playspace').append(round);
  $('#round').append(questionsAndAnswers.QuestionOne[0]);
  console.log('Space button pressed.');
  window.addEventListener('keyup', function(event) {

  if (event.keyCode == 81) { //Q, player one
    console.log('Player one has keyed in.');
turnPlayerOne(playerOneAll);
  }
  if (event.keyCode == 80) { //P, player two
  $('#round').append('<form id="formround"><div><label for="playerTwoRound">Player 2 Answer:</label><input type="text" id="playerTwoRound"/></div></form><p><div class="button"><button type="button" id="submitbuttonRoundPlayerTwo">Submit</button></div>');
  $("#submitbuttonRoundPlayerTwo").click(function() {
  checkAnswerPlayerTwo();
  });
};
});

}; // end of start round

// WORK AREA
// var myFuncName = 'somethingWicked';
// function myFuncName(){console.log('wicked');};
// somethingWicked(); // consoles 'wicked'

// want to do above
// var funcs = {};
// var myFuncName = 'somethingWicked';
// funcs[myFuncName] = function(){console.log('wicked');};
// funcs.somethingWicked(); // consoles 'wicked'

var playerOneAll = {
  label: "Player 1 Answer:",
  id: "playerOneRound",
  submitId: "submitbuttonRoundPlayerOne",
  callSubmitId: "#submitbuttonRoundPlayerOne",
  checkAnswer: 'checkAnswerPlayerOne()',
}
// END WORK AREA


function turnPlayerOne(whichPlayer){
  $('#round').append('<form id="formround"><div><label for=' + whichPlayer.id + '>' + whichPlayer.label + '</label><input type="text" id=' + whichPlayer.id + '></div></form><p><div class="button"><button type="button" id=' + whichPlayer.submitId + '>Submit</button></div>');
  $(whichPlayer.callSubmitId).click(function() {
    console.log('submitbuttonRoundPlayerOne has been clicked');
  eval(whichPlayer.checkAnswer);
  });
}



// function turnPlayerOne(){
//   $('#round').append('<form id="formround"><div><label for="playerOneRound">Player 1 Answer:</label><input type="text" id="playerOneRound"/></div></form><p><div class="button"><button type="button" id="submitbuttonRoundPlayerOne">Submit</button></div>');
//   $("#submitbuttonRoundPlayerOne").click(function() {
//     console.log('submitbuttonRoundPlayerOne has been clicked');
//   checkAnswerPlayerOne();
//   });
// }

function checkAnswerPlayerOne (){ // need to make for player two
  console.log('checkAnswerPlayerOne has been called')
  $ ("#formround").hide();
  var firstPlayerAnswer = $('#playerOneRound').val();
if (firstPlayerAnswer == questionsAndAnswers.QuestionOne[1]) {
console.log('Player one should get a point here. Correct answer was ' + questionsAndAnswers.QuestionOne[1])};
};





var round = $('<div id=round>');
var firstPlayerScore = 0;
var secondPlayerScore = 0;
var questionsAndAnswers = {
  QuestionOne: ['Who is the current president?', 'Barack Obama'],
  QuestionTwo: ['What is my favorite color?', 'Green'],
}
