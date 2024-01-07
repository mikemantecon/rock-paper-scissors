// Initialize a function that randomly returns either 'Rock', 'Paper' or 'Scissors'.

function getComputerChoice () {
  // Generates a random number between 1 and 3
  let numberChosen = Math.floor(Math.random() * 3);
  // assigns a value to the number
  if (numberChosen = 3) {
    getComputerChoice = "rock"
  } else if (numberChosen = 2) {
    getComputerChoice = "paper"
  } else if (numberChosen = 1) {
    getComputerChoice = "scissors"
  } else {
    console.log("Debugging Needed 14")
}

// Initialize a function that plays a single round of Rock Paper Scissors. The parameters should be playerSelection and computerSelection, and at the end it should return a string that declares the winner of the round like so: "You Lose! Paper beats Rock. The playerSelection parameter should be case-insensitive and a tie should cause a replay. 

function rockPaperScissors (playerSelection, computerSelection) {
  // Ask for the player selection, without being case sensitive
  let playerSelection = prompt("It's Your Turn Now! Will it be Rock, Paper, or Scissors? ").toLowerCase;
  // Retrieve Computer selection
  let computerSelection = getComputerChoice; 
  // Conditional to assing value to the choice
  if (playerSelection === computerSelection) {
    console.log("It's a tie!! Let's go for the tiebreaker...")
    return rockPaperScissors;
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        console.log("YOU WIN! Rock crushes scissors.");
      } else if (computerSelection === "paper") {
        console.log("Uh oh. You Lose. Paper covers rock. :(");
      } else {
        console.log("Debugging Needed 35");
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        console.log("YOU WIN! Paper covers rock.")
      } else (computerSelection === "scissors") {
        console.log("Uh oh! You Lose. Scissors cut paper. :(")
      } else {
        console.log("Debugging Needed 43")
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        console.log("YOU WIN! Scissors cut paper.")
      } else if (computerSelection == "rock") {
        console.log("Uh oh. You Lose. Rock crushes scissors.")
      } else {
        console.log("Debugging Needed 51")
      }
    } else {
      console.log("I didn't seem to catch that Make sure you are giving a rock/paper/scissors value (not case sensitive).");
      return rockPaperScissors;
    }
  }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Use prompt() to get input from the user. 