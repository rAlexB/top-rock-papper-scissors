const pageBody = document.querySelector('body');
const npcPlay = document.querySelector("#npc-play");
const playButtons = document.querySelector(".play-btns");
const resultSec = document.querySelector(".result");

let curPlaysLeft = 5;
let playerScore = 0;


playButtons.addEventListener("click", (e) => {
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
    cleanPage();
    //let score = 0;
    if(!curPlaysLeft <= 0) {
        const botInput = getComputerChoice();

        showNpcPlay (botInput);

        let hasPlayerWonRound = playerWinsPlay(userInput, botInput);
        if(hasPlayerWonRound) playerScore++;
        showPlayResult(hasPlayerWonRound);
        
        if(--curPlaysLeft <= 0) showGameResult();
    }
}


function cleanPage () {
    let resultChildren = Array.from(resultSec.children);
    if (resultChildren.length !== 0) {
        resultChildren.forEach(element => {
            element.textContent = " ";
        });
    }
}

function showPlayResult (playerWon){
    const playResult = document.createElement("p");
    
    if (playerWon) {
        playResult.textContent = "The player has won this play! Keep it going!"
    } else {
        playResult.textContent = "The NPC has won this play, try next time!"
    }
    
    resultSec.append(playResult);
}


function showGameResult ()  {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Out of the five games, player won ${playerScore} of them`;
    resultSec.appendChild(gameResult);

    //resets game
    curPlaysLeft = 5;
    playerScore = 0;

}

function showNpcPlay (play) {
    npcPlay.textContent = " ";
    npcPlay.textContent = play;
}