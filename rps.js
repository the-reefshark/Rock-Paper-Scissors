let playerWins = 0;
let comWins = 0;

function playerInput() {
    const selection = prompt("Rock, Paper or Scissors?");
    console.log(selection + " has been selected!");
    return selection;
}

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function round(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const com = computerSelection;
    if (player == com) {
        return "Its a Draw! You both chose " + player;
    } else if (player == "rock") {
        if (com == "paper") {
            comWins ++;
            return "You Lose! Paper beats Rock";
        } else if (com == "scissors") {
            playerWins ++;
            return "You Win! Rock beats Scissors";
        }
    } else if (player == "paper") {
        if (com == "rock") {
            playerWins ++;
            return "You Win! Paper beats Rock";
        } else if (com == "scissors") {
            comWins ++;
            return "You Lose! Scissors beats Paper!";
        }
    } else if (player == "scissors") {
        if (com == "rock") {
            comWins ++;
            return "You Lose! Rock beats Scissors!";
        } else if (com == "paper") {
            playerWins ++;
            return "You Win! Scissors beats Paper!";
        }
    }
}

for(let i = 0; i <= 5; i ++) {
    console.log(round(playerInput(), computerPlay()));
    console.log("Player: " + playerWins + ", Computer: " + comWins);
    if (comWins == 3 || playerWins == 3) {
        break;
    } else {}
}

if (comWins == playerWins) {
    console.log("Its a Draw! Refresh the browser to play again");
} else if (comWins > playerWins) {
    console.log("You Lose! Refresh the browser to try again")
} else {
    console.log("You Win! Refresh the browser to play again")
}