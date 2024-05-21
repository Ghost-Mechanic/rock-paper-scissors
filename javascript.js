/****************************************************
A simple game of rock paper scissors played entirely
on the console between a player and the computer.
****************************************************/

// This function returns a random choice between rock, paper, and scissors to be 
// played against the player of the game. 
function getComputerChoice() {
    // return a random number 0-2 to generate a random choice
    let randNum = Math.floor(Math.random() * 1000) % 3;

    // return Rock, Paper, and Scissors as strings for 0, 1, and 2 respectively
    if (randNum == 0) {
        return "Rock";
    }
    else if (randNum == 1) {
        return "Paper";
    }
    else if (randNum == 2) {
        return "Scissors";
    }
}

// This function lets the player choose their object with a prompt and returns it.
function getPlayerChoice() {
    let playerInput = prompt("Please enter your choice between rock, paper, and scissors (spell out the word): ");

    let playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1).toLowerCase();

    return playerChoice;
}

console.log("Welcome to the game of Rock Paper Scissors!");
console.log(getPlayerChoice());