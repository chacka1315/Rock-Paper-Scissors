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

//fonction for playimg
function playRound(hummanChoice, computerChoice) {
    hummanChoice = hummanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (hummanChoice==="rock" && computerChoice==="scissors") {
        console.log ("You win! Rock beats Scissors")
        hummanScore++
    } else if (hummanChoice==="rock" && computerChoice==="paper") {
        console.log ("You lose! Rock can't beats Paper")
        computerScore++        
    } else if (hummanChoice==="rock" && computerChoice==="rock") {
        console.log ("Same choices! Equality")   


    } else if (hummanChoice==="paper" && computerChoice==="scissors") {
        console.log ("You lose! Scissors beats Paper")
        computerScore++
    } else if (hummanChoice==="paper" && computerChoice==="rock") {
        console.log ("You win! Paper beats Rock")
        hummanScore++        
    } else if (hummanChoice==="paper" && computerChoice==="paper") {
        console.log ("Same choices! Equality")


    } else if (hummanChoice==="scissors" && computerChoice==="Rock") {
        console.log ("You lose! Rock beats Scissors")
        computerScore++
    } else if (hummanChoice==="scissors" && computerChoice==="paper") {
        console.log ("You win! Scissors beats Paper")
        hummanScore++        
    } else if (hummanChoice==="paper" && computerChoice==="paper") {
        console.log ("Same choices! Equality")  
    }
}
hummanSelect = getHummatChoice();
computerSelect = getComputerChoice();
playRound(hummanSelect, computerSelect);
console.log(`It was your ${hummanSelect} VS The computer's ${computerSelect}`)