// variable for keeping in track the score 

HumanScore = 0;
ComputerScore = 0;

function randomNo(){
return Math.floor(Math.random() * 3);
}


function Intro() {
    console.log("Welcome to the game Of ROCK PAPER SCISSORS ");
    console.log("Press 1 for ROCK");
    console.log("Press 2 for PAPER");
    console.log("Press 3 for SCISSORS");
}


function computerMove(){

    const move = randomNo();

    if (move === 1) {
        return 'rock';
    } else if (move === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function humanMove(){
    const choice = parseInt(prompt('Enter your choice (1 for Rock, 2 for Paper, 3 for Scissors): '), 10);

    if(choice<= 0 || choice > 3 ){

        console.log("pick between 1 and 3 ");
        return humanMove();
    }
    else {
        if (choice === 1) {
            return 'rock';
        } else if (choice === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }
}
 
function check4win(){
    const HumanMove = humanMove();
    const ComputerMove = computerMove();


    if(HumanMove ==  ComputerMove  ){
        alert("Round concluded in a draw ");
        return check4win();
       }
       else if (HumanMove === "rock" && ComputerMove === "paper" ||
        HumanMove === "paper" && ComputerMove === "scissors" ||
        HumanMove === "scissors" && ComputerMove === "rock") {
                    
                return 'computer';
                                          }  
     else {
        return 'human';
                        }
}



function Rock4Rock(){
    Intro();


    for (let index = 0; index < 5; index++) {

        if(check4win() == "human"){
            HumanScore++;
            alert("YOU WIN ! ")
            console.log("YOU WIN !");
    
        }
        else{
            ComputerScore++;
            alert("computer wins ")
            console.log("computer wins !");
        }
 }
  
    console.log("GAME CONCLUDED");

         if(HumanScore > ComputerScore){
            alert("YOU WIN THE GAME");
         }

         else{
            alert("Computer WINS !")
         }

       let choice = parseInt( prompt("enter 1 if u want to play again "));

       if(choice == 1){
        Rock4Rock;
       }
       else{
        return;
       }

}

Rock4Rock();