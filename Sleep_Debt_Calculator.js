/* The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = day => {
  let hoursSlept =   0;
  switch (day){
    case 'Monday': 
      hoursSlept = 8 ;
      break;
    case 'Tuesday':
      hoursSlept = 7 ;
      break;
    case 'Wenesday':
      hoursSlept = 5 ;
      break;
    case 'Thursday':
      hoursSlept = 7 ;
      break;
    case 'Friday':
      hoursSlept = 6 ;
      break;
    case 'Saturday':
      hoursSlept = 6 ;
      break;
    case 'Sunday':
      hoursSlept = 5 ;
      break;
    default:
      hoursSlept = 0;
}
  return hoursSlept;
}

const getActualSleepHours = () => {
let sum = 0;
sum = getSleepHours('Monday') + 
   getSleepHours('Tuesday') +
   getSleepHours('Wenesday') + 
   getSleepHours('Thursday') + 
   getSleepHours('Friday') + 
   getSleepHours('Saturday') +
   getSleepHours('Sunday');  
return sum;
} 
getActualSleepHours();

const getIdealSleepHours = (idealHours) => {
  //const idealHours = 8
  return idealHours * 7;
}

calculateSleepHours = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(8)
  
  console.log(actualSleepHours);
  console.log(idealSleepHours); 
}
calculateSleepHours()

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(8)
  
  if(actualSleepHours === idealSleepHours ){
    return console.log('You got the perfect amount of sleep');
  }else if (actualSleepHours > idealSleepHours ){
    return console.log('You got' + (actualSleepHours - idealSleepDebt) + ' more hour(s) sleep than      needed!');
  } else return console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week.You should get some rest!');
  }
calculateSleepDebt();