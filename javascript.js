var playerScore = 0;
var computerScore = 0;
    
    
    function playGame(userChoice) {
      var choices = ['ROCK', 'PAPER', 'SCISSORS'];
      var computerChoice = choices[Math.floor(Math.random() * 3)];

      var resultMessage;

      if (userChoice == computerChoice) 
      {
        resultMessage = "It's a tie!";
      } 
      else if (
        (userChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (userChoice == "PAPER" && computerChoice == "ROCK") ||
        (userChoice == "SCISSORS" && computerChoice == "PAPER")) 
      {
        resultMessage = "You win!";
        playerScore++;
      } 
      else 
      {
        resultMessage = "Computer wins!";
        computerScore++;
      }

      var resultElement = document.getElementById('ResultLabel');
      resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultMessage}`;

      var playerScoreElement = document.getElementById('humanScore');
      var computerScoreElement = document.getElementById('computerScore');

      playerScoreElement.textContent = "Human Score: " + playerScore;
      computerScoreElement.textContent = "Computer Score: " + computerScore;

      if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
          resultElement.innerHTML = "<span style='color: green';><br>Game over. You win!\nReload the page to play again</span>";
        } else {
          resultElement.innerHTML = "<span style='color: red';><br>Game over. Computer wins!\nReload the page to play again</span>";
        }
        disableButtons();
      } 
      else {
        round++;
      }
    }

    function disableButtons() {
      var buttons = document.getElementsByClassName('item');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }