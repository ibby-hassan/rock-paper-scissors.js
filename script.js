const options = ['rock', 'paper', 'scissors'];

const computerPlay = function() {
    return options[Math.floor(Math.random() * options.length)];
}

const playerPlay = function() {
    let x;
    while (true) {
        x = prompt("Choose either 'Rock', 'Paper' or 'Scissors': ");
        try {
            x = x.toLowerCase();
        } catch(err) {
            break;
        }
        if (options.includes(x)) {
            break;
        } else {
            alert("Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.");
        }
    }
    return x;
}
 
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    if(playerSelection == 'rock'){
        return computerSelection == 'scissors' ? 
        "You win! Rock beats Scissors!" : "You lose! Paper beats Rock!";
    }

    if(playerSelection == 'paper'){
       return computerSelection == 'rock' ? 
       "You win! Paper beats Rock!" : "You lose! Scissors beats Paper!";
    }

    if(playerSelection == 'scissors'){
       return computerSelection == 'paper' ? 
       "You win! Scissors beats Paper!" : "You lose! Rock beats Scissors!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    try {
        for(let i=0; i<5; i++){
            let result = playRound(playerPlay(), computerPlay());
    
            if(result.includes("win")){
                playerScore++;
            } else if(result.includes("lose")){
                computerScore++;
            }
    
            console.log(result);
            console.log(`Current scores: Player: ${playerScore} Computer: ${computerScore}`);

            if (playerScore > computerScore){
                console.log("You win the game!");
            } else if(playerScore < computerScore){
                console.log("You lose the game!");
            } else{
                console.log("It's a tie!");
            }
        }
    }

    catch(err) {
        console.warn("Player has cancelled.");
    }
}

game();