// Initialize a function that randomly returns either 'Rock', 'Paper' or 'Scissors'.

function getComputerChoice () {
  // Generates a random number between 1 and 3
  let numberChosen = Math.floor(Math.random() * 3)
  // assigns a value to the number
  if (numberChosen = 3) {
    getComputerChoice = "rock"
  } else if (numberChosen = 2) {
    getComputerChoice = "paper"
  } else if (numberChosen = 1) {
    getComputerChoice = "scissors"
  } else {
    console.log("Debugging Needed")
}

// Initialize a function that plays a single round of Rock Paper Scissors. The parameters should be playerSelection and computerSelection, and at the end it should return a string that declares the winner of the round like so: "You Lose! Paper beats Rock. The playerSelection parameter should be case-insensitive and a tie should cause a replay. 

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Use prompt() to get input from the user. 