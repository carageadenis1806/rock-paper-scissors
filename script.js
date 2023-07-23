// Computer Choice 

// I need a function that picks one random number from a total of 3. Each number returns something else

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return 'Rock';
    } else if (choice == 2) {
        return 'Paper';
    }else {
        return 'Scissors';
    }

}

