
const getComputerChoice = ()=>{
    const choice = Math.floor(Math.random()*3);
    const values = ['Rock','Paper','Scissors'];
    return values[choice];
}

console.log(getComputerChoice())