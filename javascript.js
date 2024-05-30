/****************************************************
A simple game of rock paper scissors played entirely
on a website between a player and the computer.
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

function printEndMessage()
{
    const resultsDiv = document.querySelector("#results");
    const endMessage = document.createElement("p");
    endMessage.style.whiteSpace = "pre";

    // check who won the game, print message accordingly
    if (playerScore > computerScore) 
    {
        endMessage.textContent = "\nCongratulations, you won!";
        console.log("\nCongratulations, you won!");
    }
    else if (computerScore > playerScore)
    {
        endMessage.textContent = "\nThe computer won, better luck next time!";
        console.log("\nThe computer won, better luck next time!");
    }
    else
    {
        console.log("\nIt was a tie!");
    }

    resultsDiv.appendChild(endMessage);
}

// This function plays a round of rock paper scissors by taking in the two choices as parameters
// and incrementing the scores accordingly, while printing out the results
function playRound(playerChoice) 
{
    let computerChoice = getComputerChoice();

    // increment scores by calling sameChoice() and incrementScore()
    if (!sameChoice(playerChoice, computerChoice)) {
        if (incrementScore(playerChoice, computerChoice)) {
            ++playerScore;
        }
        else {
            ++computerScore;
        }
    }

    // create reference to div where round results will be added
    const resultsDiv = document.querySelector("#results");

    // create new p element for each round's results
    const results = document.querySelector("#round");
    results.style.whiteSpace = "pre";
    results.style.display = "block";
    results.textContent = 
        `Round ${roundNum} Complete!
        \nPlayer Choice: ${playerChoice}
        \nComputer Choice: ${computerChoice}
        \nPlayer Score: ${playerScore}
        \nComputer Score: ${computerScore}`;

    // print round results
    console.log(`\nRound ${roundNum} Complete!`);
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log("Current Scores:");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    ++roundNum;

    // keep playing until a player reaches a score of 5, then print message and disable buttons
    if (playerScore == 5 || computerScore == 5)
    {
        printEndMessage();
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    }
}

// This function plays the game by initializing the score variables and calling playRound() 5 times
function playGame() 
{    
    // initialize variables for buttons
    let rockButton = document.querySelector("#rock");
    let paperButton = document.querySelector("#paper");
    let scissorsButton = document.querySelector("#scissors");

    // add event listeners for each button, allowing player to choose
    rockButton.addEventListener("click", () => playRound("Rock"));
    paperButton.addEventListener("click", () => playRound("Paper"));
    scissorsButton.addEventListener("click", () => playRound("Scissors"));
}

// hide results div until it is ready to be shown
const results = document.querySelector("#round");
results.style.display = "none";

console.log("Welcome to the game of Rock Paper Scissors!");

// initialize score variables and round number variable
let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

playGame();