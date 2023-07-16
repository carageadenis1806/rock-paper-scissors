// rock paper scissors //

// player vs computer  //

// in each round, both the player and the computer can select one of rock, paper, scissors 
//             two choices: PLAYER and COMPUTER

//CHOICES

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;
    
    if (random == 1) {
        let rock = 'Rock';
        return rock;
    } else if (random == 2) {
        let paper = 'Paper';
        return paper;
    } else {
        let scissors = 'Scissors';
        return scissors;
    }
}



// GAME

function game() {


    // SINGLE ROUND

    let playerScore = 0;
    let computerScore = 0;
    let score = 'The score is: ';

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection ==='Paper'){
        let youLose1 = 'You lose! Paper beats Rock!';
        computerScore++;
        console.log(youLose1);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
        
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        let youWin1 = 'You win! Paper beats Rock!';
        playerScore++;
        console.log(youWin1);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        let youLose2 = 'You lose! Scissors beats Paper!'
        computerScore++;
        console.log(youLose2);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        let youWin2 = 'You win! Scissors beats Paper!';
        playerScore++;
        console.log(youWin2);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        let youWin3 = 'You win! Rock beats scissors!';
        playerScore++;
        console.log(youWin3);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        let youLose3 = 'You lose! Rock beats scissors!';
        computerScore++;
        console.log(youLose3);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    } else {
        let draw = 'Draw! Try again!';
        console.log(draw);
        return score + 'Computer: ' + computerScore + ' - ' +  'Player: ' + playerScore;
    }

}


const playerSelection = prompt('Pick between Rock, Paper or Scissors');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
}


