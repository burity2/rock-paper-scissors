let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return "Khopesh";
    } else if (choice === 1) {
        return "Papyrus";
    } else if (choice === 0) {
        return "Brick";
    }
}

function getHumanChoice () {
    let sign = prompt("Take your move! (Brick, Papyrus or Khopesh)")
    if (sign.toLowerCase() === "khopesh") {
        return "Khopesh";
    } else if (sign.toLowerCase() === "papyrus") {
        return "Papyrus";
    } else if (sign.toLowerCase() === "brick") {
        return "Brick";
    }
}

function playRound(humanPlay, computerPlay) {
    if (humanPlay === computerPlay) {
        return "Tie! Both chose " + humanPlay
    } else if (
        (humanPlay === "Brick" && computerPlay === "Papyrus") ||
        (humanPlay === "Papyrus" && computerPlay === "Khopesh") ||
        (humanPlay === "Khopesh" && computerPlay === "Brick") 
        ) {
        computerScore++ 
        return "Human lost! " + computerPlay + " beats " + humanPlay;
    } else {
        humanScore++
        return "Human wins! " + humanPlay + " beats " + computerPlay;
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(humanChoice, computerChoice);
        console.log(roundResult);

        if (roundResult.includes("Human wins")) humanScore++;
        else if (roundResult.includes("Human lost")) computerScore++;

        console.log("Score: Human " + humanScore + " , Computer " + computerScore);
    }

    if (humanScore === 5) {
        return "Humans Win!" 
    } else {
        return "Machines Win!"
    }
}

console.log(playGame());




