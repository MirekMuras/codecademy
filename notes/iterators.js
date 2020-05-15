Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

//** ITERATORS */
/** scan through each row and check for the iteam 
 *  'for' loop is one , but javaScript have access to build-in array looping methods (iteration methods).*/

/******************* A few Iterators , for more iterators check the link above ********************** */

 /*  .map() executes the same code on every element in an array and returns a new array with the updated elements.*/
 const muttatedArray = arrays.map(array => {return array});

 /**.forEach() is used to execute the same code on every element in an array
   but does not change the array and returns undefined. */
 const changeEachElementInArray = arrays.forEach( array => {console.log(array)});

/* .filter() checks every element in an array to see if it meets certain criteria and 
returns a new array with the elements that return truthy for the criteria. */
 const filteredArray = arrays.filter(indexOfElement  => {return indexOfElement > 1});

 /*.reduce() iterates through an array and takes the values of the elements and returns a single value.*/
 const sum = arrays.reduce((accumulator,currentValue, currentValue) => {return accumulator + currentValue},secondArgument ); 
 
/**.findIndex() returns the index of the first element of an array which satisfies a condition
 *  in the callback function. It returns -1 if none of the elements in the array satisfies the condition. */
 const findIndexOfElement = arrays.findIndex(array => {return array > 1})

 /*The some() method tests whether at least one element in the array passes the test implemented by the provided
  function. It returns a Boolean value.*/
 const testArray = arrays.some(element => {return element%2 === 0} )


 /****************************** Choose the Right Iterator *******************************/
