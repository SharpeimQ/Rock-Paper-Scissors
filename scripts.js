        //Declare necessary data types: 
            //Declare strings: playerChoice and computerChoice
            //Declare integers: playerCount and computerCount + set them to 0
            let playerChoice, computerChoice;
            let playerCount = 0;
            let computerCount = 0;

            game(playerChoice, computerChoice);
            
        //getComputerChoice() to receive options varying from "Rock Paper Scissors"
            //Pass the string computerChoice through this function
            //Declare randNumber as an integer
            //Use a random number method and output a result of 0-2 and store that result in randNumber
            //Use a switch to give 'rock', 'paper', 'scissor' and assign it to computerChoice depending on the number (0,1,2)
            //Return computerChoice
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

        //getPlayerChoice() to get input options from player
            //Pass the string playerChoice into this function
            //Request user-input and hold the input into a new string called playerInput
            //Use the lowerCase method on playerInput and store the result in playerChoice
            //If the result is 'rock','paper', or 'scissors'
            //Return playerChoice
            //If not, repeat the user-input sequence
            function getPlayerChoice(playerChoice) {
                let playerInput;
                do {
                playerInput = prompt("Enter Rock, Paper, or Scissors!");
                playerChoice = playerInput.toLowerCase();
                }
                while ((playerChoice !== 'rock') && (playerChoice !== 'paper') && (playerChoice !== 'scissors'));
                return playerChoice;
            }

        //playRound() / A game algorithm function to determine the winner and loser of the match 
            //Pass the strings playerChoice and computerChoice and combine them into one string:
            //Declare a new string with the concatenated values of playerChoice and computerChoice
            //If playerChoice is === to computerChoice, return a "tie"
            //else-if rockscissor / rockpaper / paperscissor / paperrock / scissorrock / scissorpaper
            //Return "You win/lose, playerChoice beats/losses to computerChoice"
            //If player wins, increase playerCount by one. If computer wins, increase computerCount by one
            function playRound(playerChoice, computerChoice) {
                let conCat = playerChoice + computerChoice;
                console.log(conCat);
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

        //game() / A loop to repeat the game algorithm for a best of 5 match
            //Surround the entire algorithm in a while-loop that only breaks when playerCount or computerCount is equal to 3
            function game(playerChoice, computerChoice) {
                while (playerCount < 3 & computerCount < 3) {
                    computerChoice = getComputerChoice(computerChoice);
                    playerChoice = getPlayerChoice(playerChoice);
                    playRound(playerChoice, computerChoice);
                }
                if (playerCount === 3) {
                    console.log("Congratulations! YOU WIN!")
                }else {
                    console.log("Unfortunately! YOU LOSE!")
                }  
            }
