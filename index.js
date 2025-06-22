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
    let HummanChoice = prompt("Input your choice (Rock, Paper or Scissors?")
    return (HummanChoice)    
}
