const npcPlay = document.querySelector(".npc-play");
const playButtons = document.querySelector(".play-btns");
const resultSec = document.querySelector(".result");

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

function playGame () {
    let score = 0;

    for (let plays = 1; plays <= 5; plays++ ) {
        const userInput = getHumanChoice();
        const botInput = getComputerChoice();
    
        if(playerWinsPlay(userInput, botInput)) score++;
    }

    return showResult(score)
}

function showResult (gameScore) {
    return `Player won ${gameScore} of the total 5 games!`
}