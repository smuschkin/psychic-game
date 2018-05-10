var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 9;
var lettersGuessed = [];


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
    var userGuess = event.key; 

    
    if(userGuess === computerChoice){
        wins++;
        guessesLeft = 9;
        alert("You win!");
        lettersGuessed.push(userGuess);
        reset();
    }

    else if (guesses !== 0) {
        losses++;
        guessesLeft--;
        guesses--;
        lettersGuessed.push(userGuess);
    }

    else if (losses == 10) { 
        alert("You are a loser!");
        guesses = 10;
        
    }
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses; 
    document.getElementById('lettersGuessed').innerHTML = "Letters Guessed: " + lettersGuessed;
}