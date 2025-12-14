function getComputerChoice () {
    let choice = Math.floor((Math.random() * 3) + 1);
    let play;
    if(choice === 1) {
        play = "Rock";
    } else if (choice === 2){
        play = "Papper";
    } else {
        play = "Scissors";
    }
    return play;
}

function getHumanChoice () {
    let humanChoice = prompt("What is your play? Rock, Papper or Scissors?");
    humanChoice = treatGameInput(humanChoice);

    return humanChoice;
}

function treatGameInput (input) {
    input = input.toLowerCase();
    input = input.replace(input.at(0), input.at(0).toUpperCase());
    return input;
}