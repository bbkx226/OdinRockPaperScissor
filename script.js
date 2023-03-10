// Define global variables
let playerScore = 0;
let computerScore = 0;
const scoreToWin = 5;
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

// Function to randomly select computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to update score and check for winner
function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === scoreToWin || computerScore === scoreToWin) {
        let winner;
        if (playerScore > computerScore) {
            winner = 'Player';
        } else {
            winner = 'Computer';
        }
        resultsDiv.textContent = `${winner} wins the game!`;

        // Disable buttons after game is over
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
            button.setAttribute('style', 'cursor: default;')
        });
        restartGame()

    }
}

function restartGame() {
    const div = document.createElement('div')
    div.classList.add('rep')
    div.setAttribute('style', 'display: flex; flex: 1; justify-content: center;')
    const restart = document.createElement('button')
    restart.setAttribute('id', 'restart')
    restart.setAttribute('style', 'padding-left: 50px; padding-right: 50px;')
    restart.textContent = 'Replay'
    div.append(restart)
    document.body.appendChild(div);
    refreshPage()
}

function refreshPage() {
    const button = document.querySelector('#restart');
    button.addEventListener('click', function() {
        location.reload();
    });
}

// Add event listeners to buttons
document.querySelector('#rock').addEventListener('click', () => {
    const result = playRound('rock', computerPlay());
    resultsDiv.textContent = result;
    updateScore();
});

document.querySelector('#paper').addEventListener('click', () => {
    const result = playRound('paper', computerPlay());
    resultsDiv.textContent = result;
    updateScore();
});

document.querySelector('#scissors').addEventListener('click', () => {
    const result = playRound('scissors', computerPlay());
    resultsDiv.textContent = result;
    updateScore();
});
