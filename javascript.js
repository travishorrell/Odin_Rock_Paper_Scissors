function getComputerChoice() {

    let computerTurn = Math.floor(Math.random() * 3)

    if(computerTurn === 0)
    {
        return "ROCK"
    }
    else if(computerTurn === 1)
    {
        return "PAPER"
    }
    else if(computerTurn === 2)
    {
        return "SCISSORS"
    }
}


function playRound(userChose)
{

    //keep score
    let playerScore = 0
    let computerScore = 0

    getComputerChoice()
    let computerSelection = getComputerChoice()
    let userSelection = userChose;

    if(userSelection === computerSelection)
    {
        document.getElementById("ResultLabel").innerHTML = "It's a tie";
    }
    else if(userSelection === "ROCK" && computerSelection === "PAPER")
    {
        computerScore++
        document.getElementById("ResultLabel").innerHTML = "You Lose! Paper beats Rock";
        //alert("You Lose! Paper beats Rock")
    }
    else if(userSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        playerScore++
        document.getElementById("ResultLabel").innerHTML = "You Win! Rock beats Scissors";
        //alert("You Win! Rock beats Scissors")
    }
    else if(userSelection === "PAPER" && computerSelection === "ROCK")
    {
        playerScore++
        document.getElementById("ResultLabel").innerHTML = "You Win! Paper beats Rock";
        //alert("You Win! Paper beats Rock")
    }
    else if(userSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        computerScore++
        document.getElementById("ResultLabel").innerHTML = "You Lose! Scissors beats Paper";
        //alert("You Lose! Scissors beats Paper")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        computerScore++
        document.getElementById("ResultLabel").innerHTML = "You Lose! Rock beats Scissors";
        //alert("You Lose! Rock beats Scissors")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        playerScore++
        document.getElementById("ResultLabel").innerHTML = "You Win! Scissors beats Paper";
        //alert("You Win! Scissors beats Paper")
    }

    return playerScore, computerScore
 }


function game(userClick)
{
    for(let i = 0; i < 5; i++)
    {
        playRound(userClick);
    }
    alert("Player Score: " + playRound() + " Computer Score: " + playRound())
    if(playRound().playerScore > platRound().computerScore)
    {
        alert("You Win!")
    }
    else if(playRound().playerScore > platRound().computerScore)
    {
        alert("You Lose!")
    }
    alert("Game Over, Thanks for palying my game!")
}




