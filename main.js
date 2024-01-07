// Initialize a function that randomly returns either 'Rock', 'Paper' or 'Scissors'.

function getComputerChoice () {
  // Generates a random number between 1 and 3
  let numberChosen = Math.floor(Math.random() * 3) + 1;
  // assigns a value to the number
  if (numberChosen === 3) {
    return "rock";
  } else if (numberChosen === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Initialize a function that plays a single round of Rock Paper Scissors. The parameters should be playerSelection and computerSelection, and at the end it should return a string that declares the winner of the round like so: "You Lose! Paper beats Rock. The playerSelection parameter should be case-insensitive and a tie should cause a replay. 

// A variable to count how many games have been played and how many have been won. 
let gamesPlayed = 0;
let gamesWon = 0;

function rockPaperScissors (playerSelection, computerSelection) {
  playerSelection = playerSelection.toString().toLowerCase();
  // Conditional to assing value to the choice
  if (playerSelection === computerSelection) {
    console.log("It's a tie?! Let's try that again.")
    return false; // Indicate a tie has occured
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
  //Add to the number of games played past this point
  gamesPlayed += 1;
  return true; // Indicate that a game has been completed
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Will it be rock, paper, or scissors?")
    playerSelection = playerSelection.toString().toLowerCase();
    let computerChoice = getComputerChoice();
    computerChoice = computerChoice.toLowerCase();
    let completed = rockPaperScissors(playerSelection, computerChoice);
    if (!completed) {
      i--; // repeat this round just in case a tie happens.
    }
  }
  if (gamesWon >= 3) {
    console.log("Congratulations! You Won");
  } else {
    console.log("Better Luck Next Time. You Lost.")
  }
}

game();