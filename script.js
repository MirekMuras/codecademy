let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
function difference(a,b) { return Math.abs(a-b);} 
const alertMessage = (userGuess) => {
    if (userGuess > 9 || userGuess < 0) {
      alert('Your guess number must be between 0 and 9!'); 
  }
}

const compareGuesses = (human,computer,secretTargetNumber) => {

const userPlayer = difference (secretTargetNumber,computer);
const computerPlayer = difference (secretTargetNumber,human);
alertMessage(human)
  if(userPlayer === computerPlayer) return true;
  
  if(userPlayer > computerPlayer) {
    return true;
  } else return false ;
}

const updateScore=(winner) => (winner === 'human') ? humanScore += 1 : computerScore += 1;
const advanceRound = () => { currentRoundNumber += 1};



