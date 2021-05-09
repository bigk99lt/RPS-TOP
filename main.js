// //Rock, Paper, Scissors - computer selection
// function computerPlay() {
   
//     let randomChoice = Math.floor(Math.random() * 3);
    
//     if (randomChoice === 0) {
//         return "Rock";
//     } else if (randomChoice === 1) {
//         return "Paper";
//     } else {
//         return "Scissors"
//     }
// }



// //function that plays one round of the game

// //declare a player selectionf
// const playerSelection = "Paper";
// //declare a computer selection which is previously described function computerPlay()
// const computerSelection = computerPlay();

// function playRound(playerSelection, computerSelection) {
    
//     let player = playerSelection.toLowerCase();
//     let computer = computerSelection.toLowerCase();
    
    
    
//     //when player choses rock
//     if (player === 'rock') {
//         if (computer === 'rock') {
//             return 'It is a tie!';
//         } else if (computer === 'scissors') {
//             return 'Player wins!';
//         } else {
//             return 'Computer wins';
//         }
//     }
    
//     //when player chooses scissors
//     if (player === 'scissors') {
//         if (computer === 'scissors') {
//             return 'it is a tie!';
//         } else if (computer === 'rock') {
//             return 'Computer wins!';
//         } else {
//             return 'Player wins!';
//         }
//     }

//     //when player chooses paper
//     if (player === 'paper') {
//         if (computer === 'paper') {
//             return 'It is a tie!';
//         } else if (computer === 'rock') {
//             return 'Player wins!';
//         } else {
//             return 'Computer wins!';
//         }
//     }
// }


// //let us play one round
// // console.log('Computer chooses: ' + computerSelection); // console.log'ed to see what computer chooses 
// // console.log(playRound(playerSelection, computerSelection));



// //create a function that plays 5 rounds and determines the winner at the end
// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log('Computer chooses: ' + computerSelection);
//         console.log(playRound(playerSelection, computerSelection)); 
//     }
// }

// game();





//New Version with "cleaner code"

//declare a variable for score
//both computer and player start with zero
let playerScore = 0;
let computerScore = 0;

//Once again, function that describes how computer is making decission
function computerPlay() {

    const computerChoices = ['rock', 'paper', "scissors"];
    let random = Math.floor(Math.random() * 3);
    return computerChoices[random];
}

//now a function that asks a human player to input his or her choice
function playerPlay() {
    const playerChoice = prompt('Please enter your value');
    const option = playerChoice.toLowerCase();
    return option;
}


//function that plays one round of the game
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It is a tie';
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            return 'Player wins'
        } else {
            computerScore++;
            return 'Computer wins';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'Player wins';
        } else {
            computerScore++;
            return 'Computer wins!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            playerScore++;
            return 'Player wins';
        } else {
            computerScore++;
            return 'Computer wins';
        }
    }
}

// let playerSelection = playerPlay();
// let computerSelection = computerPlay();

// //test one round wit console.log to see if it works
// console.log(playRound(playerSelection, computerSelection));



//function that runs the game five times and declares a 
function game() {
    for (let i = 0; i <= 4; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log('Computer chooses :' + computerSelection);
        console.log('Player chooses :' + playerSelection);
        console.log('Computer score :' + computerScore);
        console.log('Player score :' + playerScore);
    }
    alert('Player final score: ' + playerScore);
    alert('Computer final score: ' + computerScore);
    if (playerScore > computerScore) {
        alert('Player is the winner!');
    }else if (computerScore > playerScore) {
        alert('Computer is the winner!');
    } else {
        alert('It is a tie!');
    }
}

game();





