console.log("Hello World")

let computerTurn = Math.floor(Math.random() * 3)
let computerPlay

if(computerTurn === 0)
{
    console.log("Rock")
    computerPlay = "ROCK"
}
else if(computerTurn === 1)
{
    console.log("Paper")
    computerPlay = "PAPER"
}
else if(computerTurn === 2)
{
    console.log("Scissors")
    computerPlay = "SCISSORS"
}

game()

function game(computerPlay) { 
    let userPlay = prompt("Rock, Paper, Scissors. Enter Your play")

    if(computerPlay === userPlay.toUpperCase())
    {
        console.log("Tie!")
    }
    else if(computerPlay === "ROCK" && userPlay.toUpperCase() === "PAPER")
    {
        console.log("You Won!")
    }
    else if(computerPlay === "ROCK" && userPlay.toUpperCase() === "SCISSORS")
    {
        console.log("You Lose!")
    }
 }

