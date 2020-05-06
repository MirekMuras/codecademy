/* Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact,
that it can be used to tell someone’s fortune.
In this project we will build the Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.*/

const userName ='Miro';
var userQuestion ="how are you doing?";
let randomNumber = Math.floor(Math.random()*7);
var eightBall = '';

console.log(randomNumber)
console.log(`${userName} ${userQuestion}`)

userName != '' ? console.log(`Hello ${userName}.`) : console.log('Hello')

switch (randomNumber){
      case 0:
    eightBall = 'It is certain';
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 1:
    eightBall = 'It is decidedly so'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 2:
    eightBall = 'Reply hazy try again'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 3:
   eightBall ='Cannot predict now'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 4:
   eightBall ='Do not count on it'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 5:
    eightBall ='My sources say no'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case 6:
    eightBall ='Outlook not so good'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
      case '7':
    eightBall ='Signs point to yes'
    console.log(`The eight ball answered: ${eightBall}`); 
    break;
    }