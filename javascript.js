
let humanScore = 0;
let ComputerScore = 0;
const buttons = document.querySelectorAll('input')

console.log("welcome");


function getComputerChoice() {

    let computerTurn = Math.floor(Math.random() * 3)

    if(computerTurn === 0)
    {
        return "ROCK";
    }
    else if(computerTurn === 1)
    {
        return "PAPER";
    }
    else if(computerTurn === 2)
    {
        return "SCISSORS";
    }
}


function playRound(humanClick)
{
    let humanChoice = humanClick;
    let computerChoice = getComputerChoice();
    let keepPlaying = 0;

    console.log("PlayRound was ran");

    document.getElementById("ResultLabel").innerHTML = "You Clicked: " + humanChoice;

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


/* ChatGPT Code
  <script>
    var playerScore = 0;
    var computerScore = 0;
    var maxRounds = 5;
    var round = 1;

    function playGame(userChoice) {
      var choices = ['rock', 'paper', 'scissors'];
      var computerChoice = choices[Math.floor(Math.random() * 3)];

      var resultMessage;

      if (userChoice === computerChoice) {
        resultMessage = "It's a tie!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        resultMessage = "You win!";
        playerScore++;
      } else {
        resultMessage = "Computer wins!";
        computerScore++;
      }

      var resultElement = document.getElementById('result');
      resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultMessage}`;

      var playerScoreElement = document.getElementById('playerScore');
      var computerScoreElement = document.getElementById('computerScore');

      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;

      if (round === maxRounds) {
        if (playerScore > computerScore) {
          resultElement.innerHTML += "<br>Game over. You win!";
        } else if (playerScore < computerScore) {
          resultElement.innerHTML += "<br>Game over. Computer wins!";
        } else {
          resultElement.innerHTML += "<br>Game over. It's a tie!";
        }
        disableButtons();
      } else {
        round++;
      }
    }

    function disableButtons() {
      var buttons = document.getElementsByClassName('choice-btn');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  </script>
</body>
</html>

*/