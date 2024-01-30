//Rock_Paper_Scissors Function
function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log("Player chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);
  
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "Player wins!";
    } else {
      return "Computer wins!";
    }
  }
  
  // Example usage
  console.log(playGame("paper"));
  