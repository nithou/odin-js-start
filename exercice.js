let humanScore = 0; // Create global score tracker for human
let computerScore = 0; // Create global score tracker for computer

// Create computer choice between rock paper and scissor
function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.33) {
        return "paper"
    } else if (choice > 0.33 && choice < 0.66) {
        return "rock"
    } else {
        return "scissor"
    }   
}

// Get the human choice through prompt
function getHumanChoice() {
   return prompt("Pick between rock, paper or scissor","scissor").toLowerCase(); // Always convert the answer to lowercase
}

// Initiate the game
function playGame () {
    let round = 0

    // Play a single round
    function playRound (humanChoice,computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You win")
            humanScore++
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You win")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You win")
            humanScore++
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You lost")
            computerScore++
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You lost")
            computerScore++
        } else if (humanChoice === computerChoice) {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> Tie !")
        } else {
            console.log(`Human: ${humanChoice}`)
            console.log(`Computer: ${computerChoice}`)
            console.log("=> You lost")
            computerScore++
        } 
    }

    // Generate loop until round 5
    while (round < 5) {
        round++
        const humanChoice = getHumanChoice(); // Assign variable to human choice
        const computerChoice = getComputerChoice(); // Assign variable to computer choice
        playRound (humanChoice,computerChoice); // Initiate round function with both variable
        console.log("---------")
        console.log(`Round: ${round}`)
        console.log(`Human score: ${humanScore} | Computer score: ${computerScore}`)
        console.log("---------")
    }
}

playGame();

