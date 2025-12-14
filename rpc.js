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
    if (userInput === "Rock" && botInput == "Scissors") return true
    if (userInput === "Paper" && botInput == "Rock") return true
    if (userInput === "Scissors" && botInput == "Paper") return true

    return false;
}

function playGame () {
    let score = 0;

    for (let plays = 1; plays <= 5; plays++ ) {
        userInput = getHumanChoice();
        botInput = getComputerChoice();
    
        if(playerWinsPlay(userInput, botInput))  {
            score++;
            console.log('Player won this round!');
        }

        console.log('Bot won thiss round! Keep it up!');
        
    }

    return showResult(score)
}

function showResult (gameScore) {
    return `Player won ${gameScore} of the total 5 games!`
}