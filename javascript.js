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


function playRound(computerPlay)
{
    getComputerChoice()
    computerSelection = getComputerChoice()
    let userPlay = prompt("Rock, Paper, Scissors. Enter Your play")
    let userSelection = userPlay.toUpperCase()

    if(userSelection === computerSelection)
    {
        alert("It's a tie")
    }
    else if(userSelection === "ROCK" && computerSelection === "PAPER")
    {
        alert("You Lose! Paper beats Rock")
    }
    else if(userSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        alert("You Win! Rock beats Scissors")
    }
    else if(userSelection === "PAPER" && computerSelection === "ROCK")
    {
        alert("You Win! Paper beats Rock")
    }
    else if(userSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        alert("You Lose! Scissors beats Paper")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        alert("You Lose! Rock beats Scissors")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        alert("You Win! Scissors beats Paper")
    }
    else
    {
        alert("Thats not a valid play. Try again.")
    }
 }

function game()
{
    for(let i = 0; i < 5; i++)
    {
        playRound()
    }
    alert("Game Over, Thanks for palying my game!")
}

game()



