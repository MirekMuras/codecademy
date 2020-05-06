/* write a program that will register runners for the race and give them instructions on race day.*/

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 18;

if( runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if( runnerAge > 18 && registeredEarly) {
  console.log(`Your race will start at 9:30 am and your race number is ${raceNumber}`)
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race will start at 11:00 am and your race number is ${raceNumber}`)
}
else {
  console.log('Please see representative at the registration desk')
}