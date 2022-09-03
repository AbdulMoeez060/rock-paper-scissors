var playerWins=0,compWins=0;
var div = document.querySelector('.results');
var restart = document.querySelector('.restart');
restart.addEventListener('click',restartPage);

const getComputerChoice = ()=>{
    const choice = Math.floor(Math.random()*3);
    const values = ['Rock','Paper','Scissors'];
    return values[choice];
}

function addNewResult(str){
    var p = document.createElement('p');
    p.textContent = str;
    div.appendChild(p);

}

function updateScore(playerScore,computerScore){
    var scores = document.querySelectorAll('li');
    scores[0].textContent = `Player: ${playerScore}`;
    scores[1].textContent = `Computer: ${computerScore}`;

}

const playRound = (playerSelection,computerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        str = `Both Computer and Player choose ${playerSelection}, so it's a tie.`;
        addNewResult(str);
    }
    else if ((playerSelection=='paper' && computerSelection=='rock')|| (playerSelection=='rock' && computerSelection=='scissors')||(playerSelection=='scissors' && computerSelection=='paper') ) {
        playerWins=playerWins+1;
        str = `Player choose ${playerSelection} and Computer choose ${computerSelection}, so Player Wins this round`;
        addNewResult(str);
        updateScore(playerWins,compWins);
    }
    else if ((playerSelection=='rock' && computerSelection=='paper')|| (playerSelection=='scissors' && computerSelection=='rock')||(playerSelection=='paper' && computerSelection=='scissors') ) {
        compWins=compWins+1;
        str = `Player choose ${playerSelection} and Computer choose ${computerSelection}, so Computer Wins`;
        addNewResult(str);
        updateScore(playerWins,compWins);

    }
    if(compWins===5){
        str = "Computer Won this Game"
        openModel(str)

    }
    if (playerWins===5) {
        str = "Player Won this Game"

        openModel(str)
        
    }
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button=>{
    button.addEventListener('click',playGame);
})

function playGame(e){
    playRound(e.target.value,getComputerChoice());//used pointer events none 
}

// Get the modal
var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModel(str) {
  modal.style.display = "block";
  var content = document.querySelector('.modal-content');
  content.childNodes[3].textContent=str;
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();

  }
}

function restartPage(){
    location.reload();
}
