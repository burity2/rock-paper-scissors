$(document).ready(() => {

let humanScore = 0;
let computerScore = 0;

const $humanScoreTracker = $("#human-score-tracker");
const $machineScoreTracker = $("#machine-score-tracker");
const $bottomText = $("#bottom-text");
const $gameReset = $("#reset-btn");

let getHumanChoice = "";
const $humanChoice = $(".options");

$humanChoice.on("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "brick-button":
            getHumanChoice = "Brick"
            break;

        case "papyrus-button":
            getHumanChoice = "Papyrus"
            break;

        case "khopesh-button":
            getHumanChoice = "Khopesh"
            break;
    };

    gamePlay();
});

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return "Khopesh";
    } else if (choice === 1) {
        return "Papyrus";
    } else if (choice === 0) {
        return "Brick";
    };
};

function round () {
    let computerCall = getComputerChoice()

    $machineScoreTracker.text("score: " + computerScore)
    $humanScoreTracker.text("score: " + humanScore)
    
    if (getHumanChoice === computerCall) {
        $bottomText.text("Tie! Both chose " + getHumanChoice)
       
    } else if (
        (getHumanChoice === "Brick" && computerCall === "Papyrus") ||
        (getHumanChoice === "Papyrus" && computerCall === "Khopesh") ||
        (getHumanChoice === "Khopesh" && computerCall === "Brick") 
        ) {
        computerScore++
        $machineScoreTracker.text("score: " + computerScore)
        $bottomText.text("You lost! The Sphynx's " + computerCall + " beats your " + getHumanChoice)

    } else {
        humanScore++
        $humanScoreTracker.text("score: " + humanScore)
        $bottomText.text("You Win! Your " + getHumanChoice + " beats the Sphynx's " + computerCall)
        
    };
};

function gamePlay() {
    round()

    if (humanScore === 5) {
        $bottomText.text("Victory! You won, human! Try again?")
        humanScore = 0
        computerScore = 0
        $machineScoreTracker.text("Defeat!")
        $humanScoreTracker.text("Victory!")


    } else if (computerScore === 5) {
        $bottomText.text("Game over! Run for your life, human! Retry in your next life?")
        humanScore = 0
        computerScore = 0
        $machineScoreTracker.text("Victory!")
        $humanScoreTracker.text("Defeat!")
    };
};

$gameReset.on('click', () => {

    if ($machineScoreTracker.text().includes("Victory!" || "Defeat!")){
        scoreReset();
        $bottomText.text("Which tool will you pick to challenge the Sphynx? First to score 5 wins!")
    
    } else if (humanScore === 0 && computerScore === 0){
        $bottomText.text("There must be at least a score point to reset the game.")
    
    } else {
    if (window.confirm("Are you sure? This will reset the score!")){

        if (humanScore > computerScore){
        $bottomText.text("The brave human deny his score and restarts the game!")

        } else {
        $bottomText.text("The kind Sphynx ignores its score and restarts the game!")
        };

        scoreReset();
    };
    };
});

    function scoreReset(){
        humanScore = 0
        computerScore = 0
        $machineScoreTracker.text("score: " + computerScore)
        $humanScoreTracker.text("score: " + humanScore)
    }
});