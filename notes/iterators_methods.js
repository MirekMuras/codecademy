// Methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#

/* .forEach()           executes a provided function once for each array element
aliens.forEach( alien => console.log('Oh powerful2 ' + alien + ' we humans offer our unconditional surrender!'))*/

/*   convertToBaby()
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

function converToBaby(array) {
    const newArray = [];
    for (let i = 0; i <= array.length-1; i++) {
        newArray.push('baby '+ array[i])
    }
    return newArray;
    
    
}
console.log(converToBaby(animals))
animals.map( animal => console.log('baby',animal))

/*### Fix the broken code 
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let y = 1;
            while (y < number) {
                  y = y * 2;
            }
            results.push(y)
            
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]*/

/*  .map()              creates a new array populated with the results of calling a provided function on every element in the calling array
//###               squareNums()
const n = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => (num * num)

const squarenums = 
    n.map(e => {
        return toSquare(e)
    })
console.log(squarenums)


const animals2 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals2.map( a => {return a[0]})
console.log(secretMessage.join(''))

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map( n => { return n/100})
console.log(smallNumbers)

const myArray = [2, 3, 4];
const s = n => n*n;
const myNewArray = [];
for (let i=0; i <= myArray.length-1; i++) {
    return myNewArray.push(s(myArray[i]))
}
console.log('test',newArray)*/

/* .filter()            creates a new array with elements that pass the test
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const randomNumbers2 = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers 
const smallNumbers = randomNumbers.filter(number => {return number < 250})

// For Loop on randomeNumbers array
const smallNumbers1 = []
for(let i = 0; i <= randomNumbers2.length-1; i++) {
    if(randomNumbers2[i] < 250) smallNumbers1.push(randomNumbers2[i])
}          
console.log('call .filter() method on Numbers' , smallNumbers)
console.log('For Loop iteretor ', smallNumbers1)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on string
const longFavoriteWords2 = favoriteWords.filter(word => { return word.length > 7})
// For-Loop on string array
const longFavoriteWords = [];
for (let index = 0; index < favoriteWords.length; index++) {
    if(favoriteWords[index].length > 7 ) longFavoriteWords.push(favoriteWords[index])    
}

console.log('call .filter() method on String ', longFavoriteWords2)
console.log('For Loop ', longFavoriteWords)*/

/* .findIndex()         returns the first index at which a given element can be found, or -1 if it is not present
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

for (let index = 0; index <= animals1.length-1; index++) {
    if([index] === 's') {
        return console.log('The word starting with letter "s" :', animals1[index]); 
    }
};

const foundAnimal = animals.findIndex( i => i === 'elephant');
console.log(' call .findIndex() methond --> ' ,foundAnimal)*/

/* .reduce()            execute a reducer function on each element of the array, resulting in single output value. 
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((acc, cur) => {
    console.log(`The value of accumulator / previous value: ${acc}`);
    console.log(`The value of current value: ${cur}`);
    {return acc + cur};
}, 10);    
    
console.log('Sum :', newSum)*/

/* .some()              It return a Boolean value ( True or False)
// test whether at least one element in the array passes the test. It return a Boolean value
const array = [1,2,3,4,5]
const even = element => element % 2 === 0;
console.log(array.some(even));*/

/* .every()             tests whether all elements in the array pass the test implemented by the provided function
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.every((word) => {return word.length > 5 } ))          // return False
*/

/* .sort()  sorts the elements of an array in place ad return te sorted array. The deault sort order = ASCending
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => b-a);
console.log(array1);
// expected output: Array [100000, 30, 21, 4, 1]

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
const sortYears = arr => arr.sort((x, y) => y - x);
console.log(sortYears(years))

function sortYears2(array) {
    const checkYear = (year1, year2) => year2 - year1;
    return array.sort(checkYear);
}
console.log(sortYears2(years))*/

/* ..include()   determines whether an array includes a certain valueamong its entries, returning Boolean True or False
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false*/

// JOIN Function
/* Interection      (elements in both sets)
let intersection = arr1.filter(x => arr2.includes(x));
// Difference       (Element in set A but NOT in set B)
let difference = arr1.filter(x => !arr2.includes(x));
// Symmetric Difference ( elements in set A and in set B but NOT in both)
let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));*/




