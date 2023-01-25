let playerCount = 0;
let playerChoice, computerChoice;
let computerCount = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('Results');
const scoreCounter = document.getElementById('scoreCounter');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const Footer = document.getElementById('Footer');

player.innerText = `User: ${playerCount}`;
computer.innerText = `Comp: ${computerCount}`;
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
         let noti = document.createElement('h3');
         noti.innerText = `This round is a tie! No points added! You both chose ${playerChoice}!`;
         results.append(noti);
         setTimeout(() => {
            noti.remove();
         }, 3000);
     } else if ((conCat === 'rockscissors') || (conCat === 'paperrock') || (conCat === 'scissorspaper')) {
         let noti = document.createElement('h3');
         noti.innerText = `You win this round! ${computerChoice} loses to ${playerChoice}!`;
         results.append(noti);
         setTimeout(() => {
            noti.remove();
         }, 3000);
         playerCount++;
     } else {
         let noti = document.createElement('h3');
         noti.innerText = `You lose this round! ${playerChoice} loses to ${computerChoice}!`;
         results.append(noti);
         setTimeout(() => {
            noti.remove();
         }, 3000);
         computerCount++;
     }
 }
 function game() {
     //while (playerCount < 3 & computerCount < 3) {
         //computerChoice = getComputerChoice(computerChoice);
         //playerChoice = getPlayerChoice(playerChoice);
         //playRound(playerChoice, computerChoice);
     //
     player.innerText = `User: ${playerCount}`;
     computer.innerText = `Comp: ${computerCount}`;
     if (playerCount >= 3) {
        let end = document.createElement('h1');
        end.innerText = `CONGRATULATIONS! YOU WIN! ${playerCount} TO ${computerCount}!`;
        end.style.backgroundColor = "black";
        end.style.color = "white";
        end.style.border = "10px";
        end.style.borderColor = "white";
        Footer.append(end);
        setTimeout(() => {
           end.remove();
        }, 5000)
        computerCount = 0;
        playerCount = 0;
     }else if (computerCount >= 3){
         let end = document.createElement('h1');
         end.innerText = `Unfortunately! YOU LOSE! ${computerCount} TO ${playerCount}!`;
         end.style.backgroundColor = "black";
         end.style.color = "white";
         end.style.border = "10px";
         end.style.borderColor = "white";
         Footer.append(end);
         setTimeout(() => {
            end.remove();
         }, 5000)
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