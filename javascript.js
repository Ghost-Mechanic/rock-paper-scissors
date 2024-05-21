/****************************************************
A simple game of rock paper scissors played entirely
on the console between a player and the computer.
****************************************************/

// This function returns a random choice between rock, paper, and scissors to be 
// played against the player of the game. 
function getComputerChoice() 
{
    // return a random number 0-2 to generate a random choice
    let randNum = Math.floor(Math.random() * 1000) % 3;

    // return Rock, Paper, and Scissors as strings for 0, 1, and 2 respectively
    if (randNum == 0) 
    {
        return "Rock";
    }
    else if (randNum == 1) 
    {
        return "Paper";
    }
    else if (randNum == 2) 
    {
        return "Scissors";
    }
}

// This function lets the player choose their object with a prompt and returns it.
function getPlayerChoice() {
    let playerInput = prompt("Please enter your choice between rock, paper, and scissors (spell out the word): ");

    let playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1).toLowerCase();

    return playerChoice;
}

// This function returns true if both the player and computer have the same choice, which means their 
// scores are not changed.
function sameChoice(playerChoice, computerChoice) 
{
    if (playerChoice == computerChoice) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}

// This function returns true if the player wins the round and false otherwise, used to update scores accordingly.
function incrementScore(playerChoice, computerChoice) 
{
    // if statements for each possibility, as the case of the choices being equal has already been checked
    if (playerChoice == "Rock") 
    {
        if (computerChoice == "Scissors") 
        {
            return true;
        }
        else if (computerChoice == "Paper") 
        {
            return false;
        }
    }
    else if (playerChoice == "Scissors") 
    {
        if (computerChoice == "Paper") 
        {
            return true;
        }
        else if (computerChoice == "Rock") 
        {
            return false;
        }
    }
    else if (playerChoice == "Paper") 
    {
        if (computerChoice == "Rock") 
        {
            return true;
        }
        else if (computerChoice == "Scissors") 
        {
            return false;
        }
    }
}

// This function plays a round of rock paper scissors by taking in the two choices as parameters
// and incrementing the scores accordingly, while printing out the results
function playRound(playerChoice, computerChoice) 
{
    // increment scores by calling sameChoice() and incrementScore()
    if (!sameChoice(playerChoice, computerChoice)) {
        if (incrementScore(playerChoice, computerChoice)) {
            ++playerScore;
        }
        else {
            ++computerScore;
        }
    }

    // print round results
    console.log("\nRound 1 Complete!");
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log("Current Scores:");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

console.log("Welcome to the game of Rock Paper Scissors!");

// initialize score variables
let playerScore = 0;
let computerScore = 0;

// get computer and player choices
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

playRound(playerChoice, computerChoice);