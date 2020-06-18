
/*reverseArray()

const sentence1 = ['mwthod.','.reverse()','use','not', 'will','This'];
const sentence2 = ['mwthod.','.reverse()','use','will','This'];

const reverseArray = (array) => {
    const newArray = [];
    for( let i = array.length-1; i >=0 ; i--) {         // using For -Loop
        newArray.push(array[i]);
    }
    return console.log('Method 1: ' , newArray)    
}
reverseArray(sentence1)

const reversed = sentence2.reverse()                    // using .reverse() method
console.log('Method 2: ', reversed)*/

/*greetAliens()
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = (arr) => {                          
for( let i = 0; i <= arr.length-1; i++)
        console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!')
}              
greetAliens(aliens);*/

/* squarenums()
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = numbers.map(number => toSquare(number))
console.log(squareNums)*/
    
/* shoutGreetings()
const words = ['miro', 'anna', 'sophie']

const capitalize = w => w.toUpperCase();

const shoutGreetings = (arr) =>
    arr.map( word => capitalize(word)+'!')


console.log(shoutGreetings(words))*/

/* sortYear() 
*Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, 
returns that array with the years sorted in descending order.
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]




console.log(sortYears(years))*/

/* justCoolStuff()              INNER JOIN -> using .filter()
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

const justCoolStuff = (arr1, arr2) => { return arr1.filter( x => arr2.includes(x));}

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]*/

/* isTheDinnerVegan()
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = array => array.every( e => e.source === 'plant' )

console.log(isTheDinnerVegan(dinner))
// Should print false*/


/* sortSpeciesByTeeth()               sorting by object(speciesArray) parameters(numTeeth)
const speciesArray = [ 
    {speciesName:'shark', numTeeth:50}, 
    {speciesName:'dog', numTeeth:42}, 
    {speciesName:'alligator', numTeeth:80}, 
    {speciesName:'human', numTeeth:32}
];

const sortSpeciesByTeeth = arr => arr.sort(
    (speciesObj1, speciesObj2) => (speciesObj1.numTeeth - speciesObj2.numTeeth) 
)


// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}


console.log(sortSpeciesByTeeth(speciesArray))*/

/* findMyKey() using .findIndex() method
const findMyKeys = arr => arr.findIndex( i => i === 'keys')

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4*/

//dogFactor()
