// Wait for the DOM to finish loading before running the game


// Function to get the computer's choice
// This function randomly chooses 0, 1 or 2
        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

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

        function updateScore() {

        }

        function showBothChoices() {

        }

