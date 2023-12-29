const game = () => {
    const options = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
    let userWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
    const userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    const computerChoice = Object.keys(options)[Math.floor(Math.random() * 3)];
    if (options[userChoice] === computerChoice) {
        alert("It's a tie!");
    } else if (options[computerChoice] === userChoice) {
        alert("You win!");
        userWins++;
    } else {
        alert("Computer wins!");
        computerWins++;
    }
}
if (userWins > computerWins) {
    alert("You win!");  
} else if (userWins < computerWins) {
    alert("You lose, better luck next time");
} else {
    alert("Tie");
    }
}
game();
    