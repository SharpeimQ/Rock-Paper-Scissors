let playerCount = 0;
let playerChoice, computerChoice;
let computerCount = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('Results');
const scoreCounter = document.getElementById('scoreCounter');

rock.addEventListener('click', (playerChoice, computerChoice) => {
     playerChoice = 'rock';
     computerChoice = getComputerChoice(computerChoice);
     playRound(playerChoice, computerChoice);
     game();
 })
 paper.addEventListener('click', (playerChoice, computerChoice)  => {
     playerChoice = 'paper';
     computerChoice = getComputerChoice(computerChoice);
     playRound(playerChoice, computerChoice);
     game();
 })
 scissors.addEventListener('click', (playerChoice, computerChoice)  => {
     playerChoice = 'scissors';
     computerChoice = getComputerChoice(computerChoice);
     playRound(playerChoice, computerChoice);
     game();
 })

 
 function getComputerChoice(computerChoice) {
     let randNumber = Math.floor(Math.random() * 3);
     switch (randNumber) {
         case 0:
             computerChoice = 'rock';
             break;
         case 1:
             computerChoice = 'paper';
             break;
         case 2: 
             computerChoice = 'scissors';
             break;
     }
     return computerChoice;
 }
 function playRound(playerChoice, computerChoice) {
     let conCat = playerChoice + computerChoice;
     if (playerChoice === computerChoice) {
         let tie = document.createElement('h1');
         tie.innerText = `This round is a tie! No points added! You both chose ${playerChoice}!`;
         results.append(tie);
         setTimeout(() => {
            tie.remove();
         }, 3000);
     } else if ((conCat === 'rockscissors') || (conCat === 'paperrock') || (conCat === 'scissorspaper')) {
         let tie = document.createElement('h1');
         tie.innerText = `You win this round! ${computerChoice} loses to ${playerChoice}!`;
         results.append(tie);
         setTimeout(() => {
            tie.remove();
         }, 3000);
         playerCount++;
     } else {
         let tie = document.createElement('h1');
         tie.innerText = `You lose this round! ${playerChoice} loses to ${computerChoice}!`;
         results.append(tie);
         setTimeout(() => {
            tie.remove();
         }, 3000);
         computerCount++;
     }
 }
 function game() {
     //while (playerCount < 3 & computerCount < 3) {
         //computerChoice = getComputerChoice(computerChoice);
         //playerChoice = getPlayerChoice(playerChoice);
         //playRound(playerChoice, computerChoice);
     //}
     if (playerCount === 3) {
         console.log("Congratulations! YOU WIN!");
         computerCount = 0;
         playerCount = 0;
     }else if (computerCount === 3){
         console.log("Unfortunately! YOU LOSE!");
         computerCount = 0;
         playerCount = 0;
     }
}
 // function getPlayerChoice(playerChoice) {
 //     let playerInput;
 //     do {
 //     playerInput = prompt("Enter Rock, Paper, or Scissors!");
 //     playerChoice = playerInput.toLowerCase();
 //     }
 //     while ((playerChoice !== 'rock') && (playerChoice !== 'paper') && (playerChoice !== 'scissors'));
 //     return playerChoice;
 //}