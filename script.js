function getComputerChoice() {
 let choice = Math.floor(Math.random() * 3)+ 1;

 
    switch (choice) {
    case 1 : return "Rock";
    case 2 : return "Paper";
    case 3 : return "Scissors";
    default : 
    console.log("Error");
 }
}

function getHumanChoice(choice) {
    if(choice > 3){
      console.log("error");
    }
    switch (choice) {
    case 1 : return "Rock";
    case 2 : return "Paper";
    case 3 : return "Scissors";
    default : 
    console.log("Error");
 }
    
}

function playRound(HumanChoice,ComputerChoice){
    console.log("Human choice = ",HumanChoice);
    console.log("Computer choice = ",ComputerChoice);

  if(HumanChoice===ComputerChoice){

    return ("egality");
  }
  else if(HumanChoice=="Rock" && ComputerChoice=="Scissors") {
    return ("Human win!");
     
  }
  else if(HumanChoice=="Paper" && ComputerChoice=="Rock") {
    return ("Human win!");
  }
  else if(HumanChoice=="Scissors" && ComputerChoice=="Paper") {
    return ("Human win!");
  }else{
    return ("Computer Win!");
  }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0 ; i < 5 ; i++){
        console.log('Round ',i+1);

      let choice = parseInt(prompt("What's your choice ?\nRock : 1 \nPaper : 2\nScissors : 3"));

    
        let result = playRound(getHumanChoice(choice),getComputerChoice());

        if(result==="Human win!"){
            humanScore++
        }else if (result==="Computer Win!"){
            computerScore++
        }
    }

    console.log("human score ",humanScore,"\n","computer score",computerScore);
    
    if(humanScore > computerScore){
      console.log('Human wins the party !');
    }else{
      console.log("Computer wins the party !");
    }
}

playGame();

