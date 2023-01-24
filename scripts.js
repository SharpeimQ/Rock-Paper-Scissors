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
 })
 paper.addEventListener('click', (playerChoice, computerChoice)  => {
     playerChoice = 'paper';
     computerChoice = getComputerChoice(computerChoice);
     playRound(playerChoice, computerChoice);
 })
 scissors.addEventListener('click', (playerChoice, computerChoice)  => {
     playerChoice = 'scissors';
     computerChoice = getComputerChoice(computerChoice);
     playRound(playerChoice, computerChoice);
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
         console.log("This round is a tie! No points added!");
     } else if ((conCat === 'rockscissors') || (conCat === 'paperrock') || (conCat === 'scissorspaper')) {
         console.log("You win this round!", playerChoice, "beats", computerChoice);
         playerCount++;
     } else {
         console.log("You lose this round!", playerChoice, "loses to", computerChoice);
         computerCount++;
     }
 }
 function game(playerChoice, computerChoice) {
     while (playerCount < 3 & computerCount < 3) {
         computerChoice = getComputerChoice(computerChoice);
         //playerChoice = getPlayerChoice(playerChoice);
         playRound(playerChoice, computerChoice);
     }
     if (playerCount === 3) {
         console.log("Congratulations! YOU WIN!")
     }else {
         console.log("Unfortunately! YOU LOSE!")
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