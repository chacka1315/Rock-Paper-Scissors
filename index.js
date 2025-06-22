// function that return computer choice
function getComputerChoice() {
    const choice = {
        choice1 : "Rock",
        choice2: "Paper",
        choice3 : "Scissors",
    };
    let computerChoice = `choice${Math.floor(Math.random() *3) + 1}`;
    return(choice[computerChoice])
}

// function that return the player choice
function getHummatChoice() {
    let hummanChoice = prompt("Input your choice (Rock, Paper or Scissors?");
    return (hummanChoice)    
}

let hummanScore = 0;
let computerScore = 0;

//fonction for playimg the different round
function playRound(hummanChoice, computerChoice) {
    hummanChoice = hummanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (hummanChoice===computerChoice) {
        console.log ("Same choices! Equality!")
    } else if ((hummanChoice==="rock" && computerChoice==="scissors") ||
                (hummanChoice==="paper" && computerChoice==="rock") ||
                (hummanChoice==="scissors" && computerChoice==="paper"))
    {
        console.log(`You win! ${hummanChoice} beats ${computerChoice}`) 
        hummanScore++
    } else {
        console.log (`You lose! ${hummanChoice} can't beats ${computerChoice}`)
        computerScore++
    }
}

//function that loops the round 5 times
function PlayGame() {
    let round = 1;
    console.log (`ROUND${round} !`)
    while (round < 6) {
        hummanSelect = getHummatChoice();
        computerSelect = getComputerChoice();
        playRound(hummanSelect, computerSelect);
        round++;
        console.log (`ROUND${round} !`)
    }
    console.log(`Your score = ${hummanScore} and Computer score = ${computerScore}`);
    if (hummanScore > computerScore) {
        console.log("YOU WIN THE GAME !")   
    } else if (hummanScore < computerScore)  {
        console.log("YOU LOSE THE GAME !")
    }  else{
        console.log("Woaw, EQUALITY ON THIS GAME !")
    }
}

//Game starter
PlayGame()


