Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

//** ITERATORS */
/** scan through each row and check for the iteam 
 *  'for' loop is one , but javaScript have access to build-in array looping methods (iteration methods).*/

/******************* A few Iterators , for more iterators check the link above ********************** */

 /*  .map() executes the same code on every element in an array and returns a new array with the updated elements.*/
 const muttatedArray = arrays.map(array => {return array});

 /**.forEach() is used to execute the same code on every element in an array
   but does not change the array and returns undefined. 
   - return undifined */
 const changeEachElementInArray = arrays.forEach( array => {console.log(array)});

/* .filter() checks every element in an array to see if it meets certain criteria and 
returns a new array with the elements that return truthy for the criteria. 
- return a new array for satisfied parameter 
-  Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after 
filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element 
3that is passed to it. The elements that cause the callback function to return true are added to the new array.*/
 const filteredArray = arrays.filter(indexOfElement  => {return indexOfElement > 1});

 /*.reduce() iterates through an array and takes the values of the elements and returns a single value.*/
 const sum = arrays.reduce((accumulator,currentValue, currentValue) => {return accumulator + currentValue},secondArgument ); 
 
/**.findIndex() returns the index of the first element of an array which satisfies a condition
 *  in the callback function. It returns -1 if none of the elements in the array satisfies the condition. */
 const findIndexOfElement = arrays.findIndex(array => {return array > 1})

 /*The some() method tests whether at least one element in the array passes the test implemented by the provided
  function. It returns a Boolean value.
  - return boolean */
 const testArray = arrays.some(element => {return element%2 === 0} )


 /****************************** Choose the Right Iterator *******************************/
