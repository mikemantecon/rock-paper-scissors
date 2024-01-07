// Initialize a function that randomly returns either 'Rock', 'Paper' or 'Scissors'.

function getComputerChoice () {
  // Generates a random number between 1 and 3
  let numberChosen = Math.floor(Math.random() * 3);
  // assigns a value to the number
  if (numberChosen = 3) {
    getComputerChoice = "rock";
  } else if (numberChosen = 2) {
    getComputerChoice = "paper";
  } else if (numberChosen = 1) {
    getComputerChoice = "scissors";
  } else {
    console.log("Debugging Needed 14");
  }
}

// Initialize a function that plays a single round of Rock Paper Scissors. The parameters should be playerSelection and computerSelection, and at the end it should return a string that declares the winner of the round like so: "You Lose! Paper beats Rock. The playerSelection parameter should be case-insensitive and a tie should cause a replay. 

// A variable to count how many games have been played and how many have been won. 
let gamesPlayed = 0;
let gamesWon = 0;
let tie = false;

function rockPaperScissors (playerSelection, computerSelection) {
  // Conditional to assing value to the choice
  if (playerSelection === computerSelection) {
    prompt("It's a tie?! Let's try that again. What's your next move? ")
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        console.log("YOU WIN! Rock crushes scissors.");
        gamesWon += 1;
      } else if (computerSelection === "paper") {
        console.log("Uh oh. You Lose. Paper covers rock. :(");
      } else {
        console.log("Debugging Needed 35");
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        console.log("YOU WIN! Paper covers rock.");
        gamesWon += 1;
      } else if (computerSelection === "scissors") {
        console.log("Uh oh! You Lose. Scissors cut paper. :(");
      } else {
        console.log("Debugging Needed 43");
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        console.log("YOU WIN! Scissors cut paper.");
        gamesWon += 1;
      } else if (computerSelection == "rock") {
        console.log("Uh oh. You Lose. Rock crushes scissors.");
      } else {
        console.log("Debugging Needed 51");
      }
    } else {
      console.log("I didn't seem to catch that Make sure you are giving a rock/paper/scissors value (not case sensitive).");
    }
  }
}

//Add to the number of games played past this point
gamesPlayed += 1;

// The space where the functions are run

// Ask for the player selection, without being case sensitive
let playerChoice = prompt("It's Your Turn Now! Will it be Rock, Paper, or Scissors? ").toLowerCase();

getComputerChoice();
rockPaperScissors(playerChoice, getComputerChoice);

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Use prompt() to get input from the user.

function game () {
  if (gamesPlayed < 5) {
    rockPaperScissors;
    gamesPlayed += 1;
  }
  else {
    if (gamesWon >= 3) {
      console.log("Congratulations! You Won");
    } else {
      console.log("Better Luck Next Time. You Lost");
    }
  }
}

let userInput = prompt("Did you enjoy this game? ").toLowerCase();

console.log("Come back soon!");