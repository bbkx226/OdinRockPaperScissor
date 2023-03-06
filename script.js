const prompt = require("prompt-sync")({sigint:true});

const getComputerChoice = () => {
    result = Math.floor(Math.random() * 3)
    if (result === 0){
        return "rock"
    } else if (result === 1){
        return "paper"
    } else return "scissor"
}

const playRound = (playerSelection, computerSelection) => {
    p = playerSelection.toLowerCase()
    c = computerSelection
    if (p === c) {
        return "It's a tie"
    } else if (p === "rock") {
        if (c === "paper") {
            return "Computer win!"
        } else if (c === "scissor") {
            return "Player win!"
        }
    } else if (p === " scissor") {
        if (c === "paper") {
            return "Player win!"
        } else if (c === " rock") {
            return "Computer win!"
        }
    } else if (p === "paper"){
        if (c === "scissor") {
            return "Computer win!"
        } else if (c === "rock") {
            return "Player win!"
        }
    } else {
        return "No such option. Please try again!"
    }
}


const game = () => {
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Insert your decision (\"Rock/Paper/Scissor\"): ");
        const computerSelection = getComputerChoice()
        console.log(`Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()