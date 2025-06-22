function getComputerChoice() {
    const choice = {
        choice1 : "Rock",
        choice2: "Paper",
        choice3 : "Scissors",
    };
    let computerChoice = `choice${Math.floor(Math.random() *3) + 1}`;
    return(choice[computerChoice])   
}


