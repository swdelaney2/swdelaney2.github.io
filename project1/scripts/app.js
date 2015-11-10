$ ("#playspace").hide();
$ ("#scores").hide();
$ ("#roundkeeper").hide();


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
  $ ("#roundkeeper").fadeIn();
  $ ("#roundkeeper").append('<h1>Round Number ' + currentInc.universalInc + '</h1>');
  $ ("#playspace").fadeIn();
  $ ("#scores").fadeIn();

  $( "#scores" ).append(firstPlayer + "(Player One): <div id='namedOneScore'>" + 0 + "</div><br>" + secondPlayer + "(Player Two): <div id='namedTwoScore'>" + 0 + "</div>");



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
  $('#round').append(questionsAndAnswers[currentInc.universalInc]);
  console.log('Space button pressed.');
  window.addEventListener('keyup', function(event) {

  if (event.keyCode == 81) { //Q, player one
    console.log('Player one has keyed in.');
turnForEachPlayer(playerOneAll);
  };
  if (event.keyCode == 80) { //P, player two
    turnForEachPlayer(playerTwoAll);
};
});

}; // end of start round



var playerOneAll = {
  label: "Player 1 Answer:",
  id: "playerOneRound",
  submitId: "submitbuttonRoundPlayerOne",
  callSubmitId: "#submitbuttonRoundPlayerOne",
  checkAnswer: 'checkAnswer(playerOneAll)',
  idHash: '#playerOneRound',
  identifySelfText: 'one',
  identifyOpponentText: 'two',
  givepoint: 'onePointForPlayerOne()',
  forefit: 'turnForEachPlayer(playerTwoAll)'
}

// var playerTwoAll = {
//   label: "Player 2 Answer:",
//   id: "playerTwoRound",
//   submitId: "submitbuttonRoundPlayerTwo",
//   callSubmitId: "#submitbuttonRoundPlayerTwo",
//   checkAnswer: 'checkAnswerPlayerTwo()',
// }

var playerTwoAll = {
  label: "Player 2 Answer:",
  id: "playerTwoRound",
  submitId: "submitbuttonRoundPlayerTwo",
  callSubmitId: "#submitbuttonRoundPlayerTwo",
  checkAnswer: 'checkAnswer(playerTwoAll)',
  idHash: '#playerTwoRound',
  identifySelfText: 'two',
  identifyOpponentText: 'one',
  givepoint: 'onePointForPlayerTwo()',
  forefit: 'turnForEachPlayer(playerOneAll)'
}



function turnForEachPlayer(whichPlayer){
  $('#round').append('<form id="formround"><div><label for=' + whichPlayer.id + '>' + whichPlayer.label + '</label><input type="text" id=' + whichPlayer.id + '></div><p><div class="button"><button type="button" id=' + whichPlayer.submitId + '>Submit</button></div></form>');
  $(whichPlayer.callSubmitId).click(function() {
    console.log('submitbuttonRoundPlayerOne has been clicked');
  eval(whichPlayer.checkAnswer);
  });
}

// currently deactivated
// function checkAnswerPlayerOne (){ // need to make for player two
//   // console.log('checkAnswerPlayerOne has been called');
//   $ ("#formround").hide();
//   var firstPlayerAnswer = $('#playerOneRound').val();
// if (firstPlayerAnswer == questionsAndAnswers[currentInc.universalInc * 2]) {
//     $('#round').append('<p>You got it! One point for player one!');
// onePointForPlayerOne();
// addOneToInc();
// setTimeout(nextRound, 2000);
// } else {
//   $('#round').append('<p>Sorry, that is not correct. Player two, you now have a chance to answer.');
//   turnForEachPlayer(playerTwoAll);
// }
// };

// WORK AREA

function checkAnswer (whichPlayer){
  $ ("#formround").hide();
  var playerAnswer = $(whichPlayer.idHash).val();
if (playerAnswer == questionsAndAnswers[currentInc.universalInc * 2]) {
    $('#round').append('<p>You got it! One point for player ' + whichPlayer.identifySelfText + '!');
eval(whichPlayer.givepoint)
addOneToInc();
setTimeout(nextRound, 2000);
} else {
  $('#round').append('<p>Sorry, that is not correct. Player ' + whichPlayer.identifyOpponentText + ', you now have a chance to answer.');
  eval(whichPlayer.forefit);
}
};



//




function nextRound() {
  $('#round').html('');
  $('#round').append(questionsAndAnswers[currentInc.universalInc * 2 - 1]);
};

var round = $('<div id=round>');
// var firstPlayerScore = 0;
var secondPlayerScore = 0; // need to comment out later
var questionsAndAnswers = ['blank', 'Who is the current president?', 'Barack Obama','What is my favorite color?', 'Green', 'What is my middle name?', 'William']




// SCORING BELOW -- need to make for player two

function baseScoreOne() {
  this.scoreOne = 0;
};

var firstPlayerScore = new baseScoreOne();

function onePointForPlayerOne() {
  firstPlayerScore.scoreOne += 1;
  $('#namedOneScore').html(firstPlayerScore.scoreOne);
}

function baseScoreTwo() { // Possible to consolidate???
  this.scoreTwo = 0;
};

var secondPlayerScore = new baseScoreTwo();

function onePointForPlayerTwo() {
  secondPlayerScore.scoreTwo += 1;
  $('#namedTwoScore').html(secondPlayerScore.scoreTwo);
}

function incrementer() {
  this.universalInc = 1;
};

var currentInc = new incrementer();

function addOneToInc() {
  currentInc.universalInc += 1;
  $('#roundkeeper').html('<h1>Round Number ' + currentInc.universalInc + '</h1>');
}
