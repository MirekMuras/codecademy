/* Using array methods, you will transform an array of strings into a secret message!*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();                   // remove the last element of the array
secretMessage.push('to','Program');    // add words to the end of the array
secretMessage[7] = 'right'             // change the word in index to 'rigth
secretMessage.shift();                 // remove the first element of the array
secretMessage.unshift('Programming')   // add aelement to the beggining of the array
secretMessage.splice(6, 5,'know');

console.log(secretMessage.length)
console.log(secretMessage.join())     // creates and returns a new string by concatenating all of the elements in an array 