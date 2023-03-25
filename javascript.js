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
        console.log("It's a tie")
    }
    else if(userSelection === "ROCK" && computerSelection === "PAPER")
    {
        console.log("You Lose! Paper beats Rock")
    }
    else if(userSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        console.log("You Win! Rock beats Scissors")
    }
    else if(userSelection === "PAPER" && computerSelection === "ROCK")
    {
        console.log("You Win! Paper beats Rock")
    }
    else if(userSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        console.log("You Lose! Scissors beats Paper")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        console.log("You Lose! Rock beats Scissors")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        console.log("You Win! Scissors beats Paper")
    }
    else
    {
        console.log("Thats not a valid play. Try again.")
    }
 }

function game()
{
    for(let i = 0; i < 5; i++)
    {
        console.log("Round " + (i + 1) + "!")
        playRound()
    }
    console.log("Game Over")
}

game()



