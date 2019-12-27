//Initialise variables
let playerWins = 0;
let comWins = 0;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Its a Draw! You both chose " + playerSelection;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            comWins ++;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            playerWins ++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins ++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            comWins ++;
            return "You Lose! Scissors beats Paper!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            comWins ++;
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection == "paper") {
            playerWins ++;
            return "You Win! Scissors beats Paper!";
        }
    }
}

//Creating nodelist of all buttons
const buttons = document.querySelectorAll('button');

//Interating through each button
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (comWins >= 5) {
            document.getElementById("score").innerHTML = "You Won the game! Hit Reset to play again";
        } else if (playerWins >= 5) {
            document.getElementById("score").innerHTML = "You Lost the game! Hit Reset to play again";
        } else {
            document.getElementById("message").innerHTML = round(button.id, computerPlay());
            document.getElementById("score").innerHTML = "Current Score:<br>You: " +
                playerWins + "<br>Com: " + comWins;
        }
    });
});

//Reset button
buttons.item(3).addEventListener('click', function(e) {
    document.getElementById("message").innerHTML = "Welcome to Rock, Paper Scissors!<br>Click a button above to begin";
    document.getElementById("score").innerHTML = "";
    playerWins = 0;
    comWins = 0;
});