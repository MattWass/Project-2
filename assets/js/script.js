// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', () => {
    let userScore = 0;
    let pcScore = 0;

    // Select elements for score and messages
    const userScoreElement = document.getElementById("player-score");
    const pcScoreElement = document.getElementById("pc-score");
    const messagesElement = document.getElementById("messages");

    // Function to get the computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Function to determine the winner between user and pc
    function determineWinner(userChoice, pcChoice) {
        if (userChoice === pcChoice) {
            return "It is a draw!";
        } else if (
            (userChoice === "rock" && pcChoice === "scissors") ||
            (userChoice === "scissors" && pcChoice === "paper") ||
            (userChoice === "paper" && pcChoice === "rock")
        ) {
            userScore++; 
            return "You have won!";
        } else {
            pcScore++; 
            return "You have lost!";
        }
    }

    // Function to show both choices and the result
    function showChoices(userChoice, pcChoice, result) {
        return `You chose ${userChoice}. PC chose ${pcChoice}. ${result}`;
    }

    // Update the score on the screen
    function updateScore() {
        userScoreElement.textContent = userScore;
        pcScoreElement.textContent = pcScore;
    }

    // Handle user button click
    function handleUserChoice(playerChoice) {
        const pcChoice = getComputerChoice();
        const result = determineWinner(playerChoice, pcChoice);
        const message = showChoices(playerChoice, pcChoice, result);

        // Display the result message
        messagesElement.textContent = message;

        // Update the score on the screen
        updateScore();
    }

    // Set up event listeners for the buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const playerChoice = button.getAttribute("data-type").toLowerCase();
            handleUserChoice(playerChoice);
        });
    });
});