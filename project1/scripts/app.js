$ ("#playspace").hide();
$ ("#scores").hide();
$ ("#roundkeeper").hide();
$ ("#countdown").hide();


var directionsListener = function(event) {
  if (event.keyCode == 32) {
    $( "#directions" ).hide();
startRound();

$(window).off("keyup", directionsListener);

  }}

var playerOneListener = function(event) {
    if (event.keyCode == 81) { //Q, player one
      console.log('Player one has keyed in.');
  turnForEachPlayer(playerOneAll);
  $(window).off("keyup", playerOneListener);
  $(window).off("keyup", playerTwoListener);
clearTimerSkip();
    }}

var playerTwoListener = function(event) {
      if (event.keyCode == 80) { //P, player two
        turnForEachPlayer(playerTwoAll);
        $(window).off("keyup", playerOneListener);
        $(window).off("keyup", playerTwoListener);
        clearTimerSkip();
            }}

// DOCUMENT READY START
$(document).ready(function(){ // start

function getNames () {
  var firstPlayer = $('#playerOneName').val();
   var secondPlayer = $('#playerTwoName').val();
 console.log('The first player is ' + firstPlayer);
  console.log('The second player is ' + secondPlayer);
  $ ("#nameForm").hide();
  $ ("#roundkeeper").fadeIn();
  $ ("#roundkeeper").append('<h2>Round Number ' + currentInc.universalInc + '</h2>');
  $ ("#playspace").fadeIn();
  $ ("#scores").fadeIn();

  $( "#scores" ).append(firstPlayer + "(Player One): <div id='namedOneScore'>" + 0 + "</div><br>" + secondPlayer + "(Player Two): <div id='namedTwoScore'>" + 0 + "</div>");

$('#playspace').append('<div id="directions"></div>');
    $( "#directions" ).append('Welcome to Britney Lyric Trivia! <p>Recognize the font above, you femme fatale? If so, I can tell you are already on your way to winning! <p>This game contains ten questions. Each one is a set of lyrics. Your job is to identify which song they are from. For the sake of this game, do not use any punctuation, except for apostrophes. <p>For example, if the prompt were "I know I may come off quiet, I may come off shy," you would type "I\'m A Slave For You" -- apostrophe included. <p><b>Player one</b>, if you know the answer, buzz in by typing "Q." <p><b>Player two</b>, if you know the answer, buzz in by typing "P." <p><b>Scoring</b>: You get one point for each correct answer, but if you buzz in and get it wrong, you lose a point and the turn is passed to the other player. The other player will then have a chance to skip or to answer themselves.<p>Got it? Great! Press "SPACE" to begin.');

$(window).on("keyup", directionsListener);

}; // end of get names

$("#submitbutton").click(function() {
getNames();
});

}); // end of onload
// END OF ONLOAD

var playerOneAll = {
  label: "Player 1 Answer:",
  id: "playerOneRound",
  submitId: "submitbuttonRoundPlayerOne",
  callSubmitId: "#submitbuttonRoundPlayerOne",
  checkAnswer: 'checkAnswer(playerOneAll)',
  forfeitcheckAnswer: 'forfeitCheckAnswer(playerOneAll)',
  idHash: '#playerOneRound',
  identifySelfText: 'one',
  identifyOpponentText: 'two',
  givepoint: 'onePointForPlayerOne()',
  losepoint: 'minusPointForPlayerOne()',
  forfeit: 'turnForForfeit(playerTwoAll)'
}

var playerTwoAll = {
  label: "Player 2 Answer:",
  id: "playerTwoRound",
  submitId: "submitbuttonRoundPlayerTwo",
  callSubmitId: "#submitbuttonRoundPlayerTwo",
  checkAnswer: 'checkAnswer(playerTwoAll)',
  forfeitcheckAnswer: 'forfeitCheckAnswer(playerTwoAll)',
  idHash: '#playerTwoRound',
  identifySelfText: 'two',
  identifyOpponentText: 'one',
  givepoint: 'onePointForPlayerTwo()',
  losepoint: 'minusPointForPlayerTwo()',
  forfeit: 'turnForForfeit(playerOneAll)'
}

function startRound(){
  $('#playspace').append(round);
  $('#round').append(questionsAndAnswers[currentInc.universalInc]);
  console.log('Space button pressed.');
  $(window).on("keyup", playerOneListener);
  $(window).on("keyup", playerTwoListener);
  // setTimerSkip();

}; // end of start round

var timeoutID;
function setTimer(){
timeoutID = setTimeout(timedOut, 16000);
};
function clearTimer(){
  clearTimeout(timeoutID);
};

var timeoutskipID;
function setTimerSkip(){
timeoutskipID = setTimeout(skipIt, 16000);
};
function clearTimerSkip(){
  clearTimeout(timeoutskipID);
};

function timedOut() {eval(whichPlayer.checkAnswer)}; // PAY ATTENTION TO THIS

function turnForEachPlayer(whichPlayer){
function timedOut() {eval(whichPlayer.checkAnswer)}; // PAY ATTENTION TO THIS
  // countdown();
  // setTimer();
  $('#round').append('<form id="formround"><div><label for=' + whichPlayer.id + '>' + whichPlayer.label + '</label><input type="text" id=' + whichPlayer.id + '></div><p><div class="button"><button type="button" id=' + whichPlayer.submitId + '>Submit</button></div></form>');
  $(whichPlayer.callSubmitId).click(function() {
    console.log('submitbuttonRoundPlayerOne has been clicked');
// clearTimer();
eval(whichPlayer.checkAnswer);
  // $('#countdown').fadeOut();
  });
}


function checkAnswer (whichPlayer){
  $ ("#formround").hide();
  var playerAnswer = $(whichPlayer.idHash).val();
if (playerAnswer.toUpperCase() === questionsAndAnswers[currentInc.universalInc * 2].toUpperCase() && playerAnswer.length === questionsAndAnswers[currentInc.universalInc * 2].length) {
    $('#round').append('<p>You got it! One point for player ' + whichPlayer.identifySelfText + '!');
eval(whichPlayer.givepoint)
addOneToInc();
setTimeout(nextRound, 2000); // This is fine.
} else {
  $('#round').append('<p>Sorry, that is not correct. You lose a point. Player ' + whichPlayer.identifyOpponentText + ', you now have a chance to answer.');
  eval(whichPlayer.losepoint);
  eval(whichPlayer.forfeit);
}
};
//work area
function forfeitCheckAnswer (whichPlayer){
  $ ("#formround").hide();
  var playerAnswer = $(whichPlayer.idHash).val();
if (playerAnswer.toUpperCase() === questionsAndAnswers[currentInc.universalInc * 2].toUpperCase() && playerAnswer.length === questionsAndAnswers[currentInc.universalInc * 2].length) {
    $('#round').append('<p>You got it! One point for player ' + whichPlayer.identifySelfText + '!');
eval(whichPlayer.givepoint)
addOneToInc();
setTimeout(nextRound, 2000); // This is fine.
} else {
  $('#round').append('<p>Sorry, that is not correct. You lose a point.');
  eval(whichPlayer.losepoint);
  skipIt();
  // clearTimer();
}
};
// end work area
function turnForForfeit(whichPlayer){
  function timedOut() {
    skipIt();
    // clearTimer();
  };

  // countdown();
//   var timeoutID;
//   function setTimer(){
//   timeoutID = setTimeout(timedOut, 16000);
// };
//   function clearTimer(){
//     clearTimeout(timeoutID);
//   };
//   setTimer();
  $('#round').append('<form id="formround"><div><label for=' + whichPlayer.id + '>' + whichPlayer.label + '</label><input type="text" id=' + whichPlayer.id + '></div><p><div class="button"><button type="button" id=' + whichPlayer.submitId + '>Submit</button></div><div class="button"><button type="button" id="skipper">Skip</button></div></form>');
  $(whichPlayer.callSubmitId).click(function() {
    console.log('submitbuttonRoundPlayerOne has been clicked');
// clearTimer();
eval(whichPlayer.forfeitcheckAnswer);
  $('#countdown').fadeOut();
  });
  $('#skipper').click(function() {
    skipIt();
    // clearTimer();
  });
}

function skipIt() {
  console.log('Skipper has been clicked.');
  $('#round').append('<p>The answer was '+ questionsAndAnswers[currentInc.universalInc * 2] + '. Onto the next round!');
  addOneToInc();
  setTimeout(nextRound, 2000); // ALL GOOD
};

//second round

function nextRound() {
  if (currentInc.universalInc == 11) {
    $('#roundkeeper').hide();
    finalScore();
  } else {
  // setTimeout(skipIt, 16000)
  $(window).on("keyup", playerOneListener);
  $(window).on("keyup", playerTwoListener);
  $('#round').html('');
  $('#round').append(questionsAndAnswers[currentInc.universalInc * 2 - 1]);
}
};

var round = $('<div id=round>');
// var firstPlayerScore = 0;
var secondPlayerScore = 0; // need to comment out later
var questionsAndAnswers = ["blank",
  "You want a hot body? You want a Bugatti? You want a Maserati?",
  "Work Bitch",
  "Lollipop. Must mistake me, you're the sucker / to think that I / would be a victim, not another.", "Womanizer",
  "Cause, you feel like paradise / and I need a vacation tonight.",
  "Hold It Against Me",
  "It's getting late / To give you up. / I took a sip / From my devil's cup.",
  "Toxic", "So come on / Won't you give me something to remember? / Baby, shut your mouth. . .",
  "Inside Out",
  "I'm miss bad media karma. / Another day another drama. / Guess I can't see no harm in working and being a mama.",
  "Piece Of Me",
  "My loneliness is killing me. I must confess, I still believe. When I'm not with you, I lose my mind. Give me a sign.",
  "Baby One More Time",
  "But I thought the old lady dropped it into the ocean in the end?",
  "Oops I Did It Again",
  "Tell me, is it true that these men are from Mars? Is that why they be acting bizarre?",
  "Pretty Girls",
  "What would it take for you to just leave with me? Not trying to sound conceited, but me and you were meant to be.",
  "Boys"];


// SCORING BELOW

function baseScoreOne() {
  this.scoreOne = 0;
};

var firstPlayerScore = new baseScoreOne();

function onePointForPlayerOne() {
  firstPlayerScore.scoreOne += 1;
  $('#namedOneScore').html(firstPlayerScore.scoreOne);
}

function minusPointForPlayerOne() {
  firstPlayerScore.scoreOne -= 1;
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

function minusPointForPlayerTwo() {
  secondPlayerScore.scoreTwo -= 1;
  $('#namedTwoScore').html(secondPlayerScore.scoreTwo);
}

// FINAL SCORE

function finalScore() {
  $('#round').html('');
  if (firstPlayerScore.scoreOne > secondPlayerScore.scoreTwo) {
    console.log('First player wins.');
    $('#round').append('<p>Congratulations, player one! You are the winner!!!! Godney smiles down upon you.');
  } else if (firstPlayerScore.scoreOne < secondPlayerScore.scoreTwo) {
    console.log('Second player wins.');
  $('#round').append('<p>Congratulations, player two! You are the winner!!!! Godney smiles down upon you.');
  } else {
    console.log('Tie.');
$('#round').append("<p>A tie. Life is tough. But Britney Spears has yet to find the perfect man, so you're not the only one dealing with hardship.");
  }
}

// INCREMENTER BELOW

function incrementer() {
  this.universalInc = 1;
};

var currentInc = new incrementer();

function addOneToInc() {
  currentInc.universalInc += 1;
  $('#roundkeeper').html('<h2>Round Number ' + currentInc.universalInc + '</h2>');
}

// COUNTDOWN BELOW
// Heavily modified, but still need to teach self. And need to learn how to kill it.
// Current fade-in and fade-out method is not fully functional

function countdown() {
  $ ("#countdown").fadeIn();

var count=16;
var counter=setInterval(timer, 1000);


function timer()
{
  count -= 1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
  $('#countdown').html(count + " secs");
}
}
