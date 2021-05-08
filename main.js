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









