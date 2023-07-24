/* 
                ROCK PAPER SCISSORS
    
    In order to make this game work I need 3 functions:

1. getComputerChoice() -> makes a random choice for the computer.
2. playRound() -> plays a single round, I want to keep the score from this function
3. game() -> inside this function the playRound() function will be looped 5 times.


 */


// 1.

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1) {
        let answer = 'Rock';
        return answer;
    }else if(choice == 2) {
        let answer = 'Paper';
        return answer;
    }else{
        let answer = 'Scissors';
        return answer;
    }
}

function playRound(computerSelection, playerSelection) {

    if(computerSelection == 'Rock' && playerSelection == 'Paper'){
        return 'You win! Paper beats Rock';
    } else if(computerSelection == 'Rock' && playerSelection == 'Scissors'){
        return 'You lose! Rock beats Scissors!';
    } else if(computerSelection == 'Paper' && playerSelection == 'Rock'){
        return 'You lose! Paper beats Rock!';
    } else if(computerSelection == 'Paper' && playerSelection == 'Scissors'){
        return 'You win! Scissors beats Paper!';
    } else if(computerSelection == 'Scissors' && playerSelection == 'Rock'){
        return 'You win! Rock beats Scissors!';
    } else if(computerSelection == 'Scissors' && playerSelection == 'Paper'){
        return 'You lose! Scissors beats Paper!';
    }else {
        return 'Draw';
    }



}


const computerSelection = getComputerChoice();

    

function game() {
    
    for(i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice: ");
        let play = playRound(computerSelection, playerSelection);
        console.log(play);
        if(play == 'You win! Paper beats Rock'){
            playerScore += 1;
        }else if(play == 'You lose! Rock beats Scissors!'){
            computerScore += 1;
        }else if(play == 'You lose! Paper beats Rock!'){
            computerScore += 1;
        }else if(play == 'You win! Scissors beats Paper!'){
            playerScore += 1;
        }else if(play == 'You win! Rock beats Scissors!'){
            playerScore += 1;
        }else if(play == 'You lose! Scissors beats Paper!'){
            computerScore += 1;
        }
        console.log('Player has :' + playerScore + ' points. ' + " Computer has :" + computerScore + " points."); 
    }

    
}