function getComputerChoice() {
 let choice = Math.floor(Math.random() * 3)+ 1;

 
    switch (choice) {
    case 1 : return "Rock";
    break ;
    case 2 : return "Paper";
    break;
    case 3 : return "Scissors";
    break;
    default : 
    console.log("Error");
 }
}

function getHumainChoice(choice) {

    switch (choice) {
    case 1 : return "Rock";
    break ;
    case 2 : return "Paper";
    break;
    case 3 : return "Scissors";
    break;
    default : 
    console.log("Error");
 }
    
}

function playRound(HumainChoice,ComputerChoice){
  if(HumainChoice===ComputerChoice){

    console.log("egality")
  }
  else if(HumainChoice=="Rock" && ComputerChoice=="Scissors") {
    console.log("Human win!")
     
  }
  else if(HumainChoice=="Paper" && ComputerChoice=="Rock") {
    console.log("Human win!")
  }
  else if(HumainChoice=="Scissors" && ComputerChoice=="Paper") {
    console.log("Human win!")
  }else{
    console.log("Computer Win")
  }

  console.log("humain score = ",humanScore ,"\n", "computer score = ",computerScore);
}

function PlayGame(playRound){
    for(let i = 0 ; i < 5 ; i++)
    {
        console.log("Round ",i+1);
        playRound();
    }
}



let choice = parseInt(prompt("What's your choice ?\nRock : 1 \nPaper : 2\nScissors : 3"));

console.log('Computer choice = ',getComputerChoice());
console.log('Humain choice = ',getHumainChoice(choice));

PlayGame(playRound);