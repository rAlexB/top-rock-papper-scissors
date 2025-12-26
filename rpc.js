const npcPlay = document.querySelector(".npc-play");
const playButtons = document.querySelector(".play-btns");
const resultSec = document.querySelector(".result");

let curPlaysLeft = 5;
let playerScore = 0;


playButtons.addEventListener("click", (e) => {
    cleanPage();
    let playerChoice = treatGameInput(e.target.textContent);
    playGame(playerChoice);
    
});

function getComputerChoice () {
    let choice = Math.floor((Math.random() * 3) + 1);
    let play;
    if(choice === 1) {
        play = "Rock";
    } else if (choice === 2){
        play = "Paper";
    } else {
        play = "Scissors";
    }
    return play;
}

function getHumanChoice () {
    let humanChoice = prompt("What is your play? Rock, Paper or Scissors?");
    humanChoice = treatGameInput(humanChoice);

    return humanChoice;
}

function treatGameInput (input) {
    input = input.toLowerCase();
    input = input.replace(input.at(0), input.at(0).toUpperCase());
    return input;
}

function playerWinsPlay (userInput, botInput) {

    if(userInput === botInput) {
        console.log(`Oh! Same choice, try again!`);
        return false;
    } else if (userInput === "Rock" && botInput == "Scissors" || userInput === "Paper" && botInput == "Rock" || userInput === "Scissors" && botInput == "Paper") {
        console.log(`${userInput} beats ${botInput}, keep it going!`);
        return true;
    } else {
        console.log(`${botInput} beats ${userInput}, try next time!`);
        return false;
    }
}

function playGame (userInput) {
    //let score = 0;
    if(!curPlaysLeft <= 0) {
        const botInput = getComputerChoice();
    
        if(playerWinsPlay(userInput, botInput)) playerScore++;
        
        if(curPlaysLeft <= (--curPlaysLeft)) {
            showResult();
        }
        
    } else {
        showResult();
    }
}


function cleanPage () {
    let resultChildren = Array.from(resultSec.children);
    if (!resultChildren.length === 0) {
        resultChildren.forEach(element => {
            element.textContent = " ";
        });
    }
}

function showResult ()  {
    //TODO
    const result = document.createElement("p");
    result.textContent = `Out of the five games, player won ${playerScore} of them`;
    resultSec.appendChild(result);

}