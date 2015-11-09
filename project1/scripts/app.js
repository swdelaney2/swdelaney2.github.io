$(document).ready(function(){ // start


// document.getElementById("submitbutton").onclick = getNames;



  // var userInput = prompt('What is your name?');
  // if (userInput.length < 1) {
  //   alert('Hey, you didn\'t give us your name.')}
  //   else {
  //     alert('Thanks, ' + userInput + '!!!!!!!')}
  //
  // var getName = $('#getname');
  //  getName.click(function() {
  //      alert(Welcome, getname!);
  //  });





}); // end

function getNames () {
 var playerOne = document.getElementById('playerOneName').value;
 var playerTwo = document.getElementById('playerTwoName').value;
 console.log(PlayerOne);
};

$( "#submitbutton" ).click(function() {
getNames()
});
