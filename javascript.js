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

function playGame()
{
    let humanchoice;
    let computerChoice = getComputerChoice();
    let keepPlaying ;

}




