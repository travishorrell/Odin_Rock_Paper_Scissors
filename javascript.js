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

    //keep score
    let playerScore = 0
    let computerScore = 0

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
        computerScore++
        alert("You Lose! Paper beats Rock")
    }
    else if(userSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        playerScore++
        alert("You Win! Rock beats Scissors")
    }
    else if(userSelection === "PAPER" && computerSelection === "ROCK")
    {
        playerScore++
        alert("You Win! Paper beats Rock")
    }
    else if(userSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        computerScore++
        alert("You Lose! Scissors beats Paper")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        computerScore++
        alert("You Lose! Rock beats Scissors")
    }
    else if(userSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        playerScore++
        alert("You Win! Scissors beats Paper")
    }
    else
    {
        alert("Thats not a valid play. Try again.")
    }

    return playerScore, computerScore
 }



function game()
{
    for(let i = 0; i < 5; i++)
    {
        playRound()
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

game()



