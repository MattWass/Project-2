// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', () => {

    // Initialize user and computer scores
    let userScore = 0;
    let pcScore = 0;

    // Select elements for score and messages
    const userScoreElement = document.getElementById("user-score");
    const pcScoreElement = document.getElementById("pc-score");
    const messagesElement = document.getElementById("messages");


    // Function to get the computer's choice
    // This function randomly chooses 0, 1 or 2
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Function to determine the winner between user and pc
    function determineWinner(userChoice, pcChoice) {
        if (userChoice === pcChoice) {
            return "It is a draw";
        } else if (
            (userChoice === "rock" && pcChoice === "scissors") ||
            (userChoice === "scissors" && pcChoice === "paper") ||
            (userChoice === "paper" && pcChoice === "rock")
        ) {
            return "You have won";
        } else {
            return "You have lost";
        }
    }

    // Function to update the score between user and pc
    function updateScore(result, userScore, pcScore) {
        if (result === "You win!") {
            userScore++;
        } else if (result === "You lose!") {
            pcScore++;
        }
        return { userScore, pcScore };
    }

    // Function to show both choices
    function showBothChoices(result, userChoice, pcChoice) {
        return `You chose ${userChoice}. Computer chose ${pcChoice}. ${result}`;
    }

});
