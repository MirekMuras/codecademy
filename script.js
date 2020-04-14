let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// random numebr function ( from 0 to 0)
const generateTarget = () => Math.floor(Math.random() * 10);
// absolute value function
function difference(a,b) { return Math.abs(a-b);} 
// alert function 
const alertMessage = (userGuess) => {
    if (userGuess > 9 || userGuess < 0) {
      alert('Your guess number must be between 0 and 9!'); 
  }
}

// compare function
const compareGuesses = (human,computer,secretTargetNumber) => {

const userPlayer = difference (secretTargetNumber,computer);
const computerPlayer = difference (secretTargetNumber,human);
alertMessage(human)
  if(userPlayer === computerPlayer) return true;
  
  if(userPlayer > computerPlayer) {
    return true;
  } else return false ;
}

// update score after each iteration
const updateScore=(winner) => (winner === 'human') ? humanScore += 1 : computerScore += 1;
// update to new round
const advanceRound = () => { currentRoundNumber += 1};



