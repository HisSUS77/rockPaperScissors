let HumanScore = 0;
let ComputerScore = 0;
let computerChoice = "";
let humanChoice = "";
let gameCount = 0;

function WinnerAnnouncementEachRound(winner, computerChoice, humanChoice) {
    const results = document.querySelector(".results");
    results.textContent = `Computer choice: ${computerChoice} and Human choice: ${humanChoice}. Winner: ${winner}`;
}

function WinnerAnnouncement5Rounds(winner) {
    const results = document.querySelector(".results");
    results.textContent = `${winner}`;
}

function randomNo() {
    return Math.floor(Math.random() * 3);
}

function computerMove() {
    const move = randomNo();
    if (move === 0) {
        return 'rock';
    } else if (move === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function check4win(humanMove) {
    const computerMoveSelection = computerMove();
    computerChoice = computerMoveSelection;
    humanChoice = humanMove;

    if (humanMove === computerMoveSelection) {
        return 'draw';
    } else if (
        (humanMove === "rock" && computerMoveSelection === "paper") ||
        (humanMove === "paper" && computerMoveSelection === "scissors") ||
        (humanMove === "scissors" && computerMoveSelection === "rock")
    ) {
        return 'computer';
    } else {
        return 'human';
    }
}

function Rock4Rock(humanMove) {
    gameCount++;
    let roundResult = check4win(humanMove);

    if (roundResult === 'human') {
        HumanScore++;
    } else if (roundResult === 'computer') {
        ComputerScore++;
    }

    WinnerAnnouncementEachRound(roundResult, computerChoice, humanChoice);

    if (gameCount === 5) {
        if (HumanScore > ComputerScore) {
            WinnerAnnouncement5Rounds("Human wins the game");
        } else if (ComputerScore > HumanScore) {
            WinnerAnnouncement5Rounds("Computer wins the game");
        } else {
            WinnerAnnouncement5Rounds("The game is a draw");
        }

        // Reset scores and game count for the next series
        HumanScore = 0;
        ComputerScore = 0;
        gameCount = 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    if (container) {
        container.style.color = "blue";
        container.style.backgroundColor = "white";

        const styleButton = (button) => {
            button.style.cssText = `
                font-size: 1.5em;
                padding: 10px 20px;
                margin: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                background-color: lightgray;
            `;
        };

        const rock = document.createElement("button");
        rock.classList.add("rock");
        rock.textContent = "Rock";
        styleButton(rock);
        container.appendChild(rock);

        const paper = document.createElement("button");
        paper.classList.add("paper");
        paper.textContent = "Paper";
        styleButton(paper);
        container.appendChild(paper);

        const scissors = document.createElement("button");
        scissors.classList.add("scissors");
        scissors.textContent = "Scissors";
        styleButton(scissors);
        container.appendChild(scissors);

        const results = document.createElement("div");
        results.classList.add("results");
        container.appendChild(results);

        rock.addEventListener("click", () => {
            Rock4Rock("rock");
        });

        paper.addEventListener("click", () => {
            Rock4Rock("paper");
        });

        scissors.addEventListener("click", () => {
            Rock4Rock("scissors");
        });
    } else {
        console.error("Container element not found.");
    }
});
