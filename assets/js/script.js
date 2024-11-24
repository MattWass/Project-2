// Wait for the DOM to finish loading before running the game



        function getComputerChoice() {

        }

        function determineWinner(userChoice, pcChoice) {
            if (userChoice === pcChoice) {
                return "It's a tie!";
            } else if (
                (userChoice === "rock" && pcChoice === "scissors") ||
                (userChoice === "scissors" && pcChoice === "paper") ||
                (userChoice === "paper" && pcChoice === "rock")
            ) {
                return "You win!";
            } else {
                return "You lose!";
            }
        }

        function updateScore() {

        }

        function showBothChoices() {

        }

