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