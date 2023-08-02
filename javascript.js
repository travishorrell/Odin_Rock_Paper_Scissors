    var playerScore = 0;
    var computerScore = 0;
    var maxRounds = 5;
    var round = 1;

    function playGame(userChoice) {
      var choices = ['ROCK', 'PAPER', 'SCISSORS'];
      var computerChoice = choices[Math.floor(Math.random() * 3)];

      var resultMessage;

      if (userChoice == computerChoice) 
      {
        resultMessage = "It's a tie!";
      } 
      else if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")) 
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

      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;

      if (round == maxRounds) {
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
      var buttons = document.getElementsByClassName('item');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
