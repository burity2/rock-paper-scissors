let humanScore = 0;
let computerScore = 0;

const humanScoreTracker = document.getElementById("human-score-tracker")
const humanScoreUpdater = document.createElement("div")

const machineScoreTracker = document.getElementById("machine-score-tracker")
const machineScoreUpdater = document.createElement("div")

const bottomText = document.getElementById("bottom-text")
const roundUpdater = document.createElement("div")

let getHumanChoice = ""
const humanChoice = document.querySelector(".options");

humanChoice.addEventListener ("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "brick-button":
            getHumanChoice = "Brick"
            //console.log(getHumanChoice);
            break;
        case "papyrus-button":
            getHumanChoice = "Papyrus"
           //console.log(getHumanChoice);
            break;
        case "khopesh-button":
            getHumanChoice = "Khopesh"
           //console.log(getHumanChoice);
            break;
    }
});
//console.log(getHumanChoice)

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return "Khopesh";
    } else if (choice === 1) {
        return "Papyrus";
    } else if (choice === 0) {
        return "Brick";
    }
}

// const playRound = document.querySelector(".options");
// playRound.addEventListener ("click", round)

function round (playerCall = getHumanChoice, computerCall) {
    computerCall = getComputerChoice()

    machineScoreTracker.textContent = "score: " + computerScore
        humanScoreTracker.textContent = "score: " + humanScore
    
    if (getHumanChoice === computerCall) {
        bottomText.textContent = "Tie! Both chose " + getHumanChoice
       

        //console.log("tie")
        //return "Tie! Both chose " + playerCall
    } else if (
        (getHumanChoice === "Brick" && computerCall === "Papyrus") ||
        (getHumanChoice === "Papyrus" && computerCall === "Khopesh") ||
        (getHumanChoice === "Khopesh" && computerCall === "Brick") 
        ) {
        computerScore++
        machineScoreTracker.textContent = "score: " + computerScore
        bottomText.textContent = "You lost! The Sphynx's " + computerCall + " beats your " + getHumanChoice


        //console.log()
        //return "You lost! " + computerCall + " beats " + playerCall;
    } else {
        humanScore++
        humanScoreTracker.textContent = "score: " + humanScore
        bottomText.textContent = "You Win! Your " + getHumanChoice + " beats the Sphynx's " + computerCall
        
        //console.log("win")
        //return "You win! " + playerCall + " beats " + computerCall;
    }
}

const playGame = document.querySelector(".options")
playGame.addEventListener ("click", gamePlay)

function gamePlay () {
    round()

    if (humanScore === 5) {
        bottomText.textContent = "Victory! You won, human! Try again?"
        //console.log("humans win, " + "humans:" + humanScore + "machines" + computerScore)
        humanScore = 0
        computerScore = 0
        machineScoreTracker.textContent = "Defeat!"
        humanScoreTracker.textContent = "Victory!"


    } else if (computerScore === 5) {
        bottomText.textContent = "Game over! Run for your life, human! Retry in your next life?"
        //console.log("humans lost, " + "humans:" + humanScore + "machines" + computerScore)
        humanScore = 0
        computerScore = 0
        machineScoreTracker.textContent = "Victory!"
        humanScoreTracker.textContent = "Defeat!"
}
}


```
function playRound(playerCall, computerCall) {
    let computerCall = getComputerChoice()

    if (playerCall === computerCall) {
        return "Tie! Both chose " + playerCall
    } else if (
        (playerCall === "Brick" && computerCall === "Papyrus") ||
        (playerCall === "Papyrus" && computerCall === "Khopesh") ||
        (playerCall === "Khopesh" && computerCall === "Brick") 
        ) {
        computerScore++ 
        return "You lost! " + computerCall + " beats " + playerCall;
    } else {
        humanScore++
        return "You win! " + playerCall + " beats " + computerCall;
    }
}

const endRound = document.querySelector(".options");
endRound.addEventListener("mouseup", finishGame)

function finishGame () {
    if (humanScore === 5) {
        console.log("humans win, " + "humans:" + humanScore + "machines" + computerScore)
        humanScore = 0
        computerScore = 0

    } else if (computerScore === 5) {
        console.log("humans lost, " + "humans:" + humanScore + "machines" + computerScore)
        humanScore = 0
        computerScore = 0
    
    } else {
        return " "
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        //const humanMove == getHumanChoice;
        const computerMove = getComputerChoice();

        const roundResult = playRound(getHumanChoice, computerMove);
        console.log(roundResult);

        if (roundResult.includes("You win")) humanScore++;
        else if (roundResult.includes("You lost")) computerScore++;

        console.log("Score: Human " + humanScore + " , Computer " + computerScore);
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
```