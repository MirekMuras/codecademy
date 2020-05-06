/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors.
 The items are compared, and whichever player chooses the more powerful item wins.

	The possible outcomes are:

	Rock destroys scissors.
	Scissors cut paper.
	Paper covers rock.
	If there’s a tie, then the game ends in a draw.
	Our code will break the game into four parts:

	 1. Get the user’s choice.
	 2. Get the computer’s choice.
	 3. Compare the two choices and determine a winner.
	 4. Start the program and display the results.
*/

const getUserChoice = userInput => { 
 userInput = userInput.toLowerCase(); 
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
		return userInput;
	} else {console.log('Error!');}
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);  
  if( randomNumber === 0){return 'rock';} 
  else if (randomNumber === 1){return 'paper';}  
  else {return 'scissors'}; 
}

const determineWinner = (userChoice, computerChoice) => {
  if( userChoice === computerChoice) return 'The game is a tie!'
  
  if(userChoice === 'bomb')return 'You won!'
  
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won!';
    } else {
      return 'You won';
    }
  }
  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won!';
    } else {
      return 'You won';
    }
  }
  
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won';
    }
  }  
};

const playGame = () => {
const userChoice = getUserChoice('bomb') ;
const computerChoice = getComputerChoice() ;

console.log('You threw: ' + userChoice);
console.log('The computer threw:' + computerChoice);  
console.log(determineWinner(userChoice, computerChoice)) ; 
};

playGame() 


