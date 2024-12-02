// Initializing the scores before any actions
let humanScore = 0;
let ComputerScore = 0;

// Return the choice of the computer using math.random
function getComputerChoice() {
    let randomVal = Math.random()
    if (randomVal < 0.33) {
        return "rock";
    } else if (randomVal < 0.67) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Reads and returns the humans choice
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors")

}


// Plays the round. Updates the scores and prints out the result
function playRound(humanChoice, computerChoice) {
    //lowercase convertion
    
}