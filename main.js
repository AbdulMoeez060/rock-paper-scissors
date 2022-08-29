
const getComputerChoice = ()=>{
    const choice = Math.floor(Math.random()*3);
    const values = ['Rock','Paper','Scissors'];
    return values[choice];
}

const playRound = (playerSelection,computerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        alert(`Both are ${playerSelection}, so it's a tie.`);
    }
    else if ((playerSelection=='paper' && computerSelection=='rock')|| (playerSelection=='rock' && computerSelection=='scissors')||(playerSelection=='scissors' && computerSelection=='paper') ) {
        alert(`Player choose ${playerSelection} and Computer choose ${computerSelection}, so Player Wins`);
    }
    else if ((playerSelection=='rock' && computerSelection=='paper')|| (playerSelection=='scissors' && computerSelection=='rock')||(playerSelection=='paper' && computerSelection=='scissors') ) {
        alert(`Player choose ${playerSelection} and Computer choose ${computerSelection}, so Computer Wins`);
    }
    else{
        alert("Wrong input")
    }

}

const game = ()=>{
   for (let i = 0; i < 5; i++) {
        const pChoice = prompt("Please enter Your choice:")
       console.log(playRound(pChoice,getComputerChoice()))
    
   } 
}

game()
