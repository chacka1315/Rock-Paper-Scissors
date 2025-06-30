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

let hummanScore = 0;
let computerScore = 0;
const resultDisplayer = document.querySelector(".resultDisplayer");
const finalScore = document.createElement("p");
const paraResult = document.createElement("p");




//fonction for playimg the different round
function playRound(hummanChoice, computerChoice) {
    hummanChoice = hummanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (hummanChoice===computerChoice) {
        resultDisplayer.textContent ="Same choices! Equality!";
    } else if ((hummanChoice==="rock" && computerChoice==="scissors") ||
                (hummanChoice==="paper" && computerChoice==="rock") ||
                (hummanChoice==="scissors" && computerChoice==="paper"))
    {
        resultDisplayer.textContent = `You win! ${hummanChoice} beats ${computerChoice}`;
        hummanScore++;
    } else {
        resultDisplayer.textContent = `You lose! ${hummanChoice} can't beats ${computerChoice}`;
        computerScore++;
    }
}

//function that loops the round 5 times
function PlayGame() {
    const btnChoice = document.querySelectorAll("button");
    btnChoice.forEach((button) => {
        button.addEventListener("click", () =>{
            const hummanChoice =  button.textContent;
            const computerChoice = getComputerChoice();
            playRound(hummanChoice, computerChoice);
             
            resultDisplayer.appendChild(finalScore);
            finalScore.textContent = `Your score =  ${hummanScore} and Computer score = ${computerScore}`;

             //Show winner once one player reaches 5 and reset the scores for new game
              while (hummanScore === 5 || computerScore === 5) {
                resultDisplayer.appendChild(paraResult);
                if (hummanScore > computerScore) {
                    paraResult.textContent = "YOU WIN THE GAME !"; 
                } else if (hummanScore < computerScore)  {
                    paraResult.textContent = "YOU LOSE THE GAME !";
                }  else{
                    paraResult.textContent = "Woaw, EQUALITY ON THIS GAME !";
                } 
                hummanScore = computerScore = 0;
             }
        })
        
    });

   

    
}

//Game starter
PlayGame()


