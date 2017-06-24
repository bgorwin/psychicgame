//////////////// The Alphabet //////////////
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                       'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                       'u', 'v', 'w', 'x', 'y', 'z'];

///////////////////// List Variables ////////////////
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



/////// Create the Math.Floor(Math.random) to allow the compter to ake random choices ////////////////
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



//////////////// Create the guesses and make sure to "id" it to the html tab ///////////////////////
//////// querySelector tip from Erik, look up on w3schools later ///////
    var updateGuessesLeft = function() {

      document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;

    };

    var updateLetterToGuess = function() {

      this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];

    };


////////// Function for the guessed letters and make sure to "id" it to the html //////
var updateGuessesSoFar = function() {

  document.querySelector('#picked').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');

};

///////// Reset function so that it will reload the page and everything ////
    var reset = function() {
      totalGuesses = 9;
      guessesLeft = 9;
      guessedLetters = [];

      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    }

    updateLetterToGuess();
    updateGuessesLeft();


////////////// onKeyUp  start it console.log   //////////////////////////
document.onkeyup = function(event) {
    guessesLeft --;
/////// String.fromCharCode tip from Erik, look up on w3 schools. ////
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        } else if (guessesLeft == 0){
             
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
             
            reset();
        }
};