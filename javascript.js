let playerScore = 0;
let computerScore = 0;


    
function game(humanChoice)
{
  let computerChoiceArray = ["ROCk", "PAPER", "SCISSORS"];
  let computerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];
  let resultMessage;

    //If theirs a tie
    if(humanChoice == computerChoice)
    { 
      resultMessage = "Game tie, try again!";
    }
    //If the human wins
    else if(humanChoice == "ROCK" && computerChoice == "SCISSORS"
          ||humanChoice == "PAPER" && computerChoice == "ROCK"
          ||humanChoice == "SCISSORS" && computerChoice == "PAPER")
          {
            resultMessage = "Human Wins";
            playerScore++;
            console.log(playerScore);
          }
          else
          {
            resultMessage = "Computer Wins";
            computerScore++;
            console.log(computerScore);
          }
    document.getElementById("ResultLabel").innerHTML = resultMessage;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("humanScore").innerHTML = playerScore;
  }

  if(playerScore > computerScore)
  {
    document.getElementById("ResultLabel").innerHTML = "Human Won!, reload page to play agian";
  }
  else
  {
    document.getElementById("ResultLabel").innerHTML = "Computer Won!, This is the start of skynet. reload page to play again";
  }





























