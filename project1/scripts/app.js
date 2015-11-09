$(document).ready(function(){ // start

function getNames () {
  var firstPlayer = $('#playerOneName').val();
   var secondPlayer = $('#playerTwoName').val();
 console.log('The first player is ' + firstPlayer);
  console.log('The second player is ' + secondPlayer);
};


$("#submitbutton").click(function() {
getNames();
$ ("#nameForm").hide();
});


}); // end
