## Arrays
/*Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). 
*/

## Create an Array
/* An Array Literal - An array literal creates an array by wrapping items in square brackets []. */
			["String' , int, boolen ]
			
## Accessing Elements
/* Each element in an array has a numbered position known as its index.
We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
*/

## Arrays and Functions
/* So when you pass an array into a function, if the array is mutated inside the function,
 that change will be maintained outside the function as well.
 You might also see this concept explained as pass-by-reference since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.*/

		const flowers = ['peony', 'daffodil', 'marigold'];

		function addFlower(arr) {  arr.push('lily'); }

		addFlower(flowers);

		console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

## Nested Arrays
/* When an array contains another array it is known as a nested array.*/
				
			const nestedArr = [[1], [2, 3]];
// will grab the element in index 1 which is the array [2, 3].
			console.log(nestedArr[1]); // Output: [2, 3]
/*if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.*/
			console.log(nestedArr[1][0]); // Output: 2

## Arrays with let and const
/* You may recall that you can declare variables with both the let and const keywords.
 Variables declared with let can be reassigned.
Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable.
 Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.*/
 
## The .length property
/* One of an array’s built-in properties is length and it returns the number of items in the array.
 We access the .length property just like we do with strings.*/
 
			const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
			
			console.log(newYearsResolutions.length); 	// Output: 2
			
## The .push() Method
/* some built-in JavaScript methods that make working with arrays easier.
 These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
 
 One method, .push() allows us to add items to the end of an array.
 - .push() can take a single argument or multiple arguments separated by commas.
 - .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method
 since it changes the initial array.*/
 
			 const itemTracker = ['item 0', 'item 1', 'item 2'];

				itemTracker.push('item 3', 'item 4');		// .push() is a javaScript build in method

				console.log(itemTracker); 	// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

## 	The .pop() Method
/* - .pop(), removes the last item of an array.
 - .pop() does not take any arguments, it simply removes the last element of an array
 - .pop() returns the value of the last element.
 - .pop() is a method that mutates the initial array. */
 
				const newItemTracker = ['item 0', 'item 1', 'item 2'];

				const removed = newItemTracker.pop();

				console.log(newItemTracker); 	// Output: [ 'item 0', 'item 1' ]
				console.log(removed);			// Output: item 2 
				
## The .splice() Method
/* Remove and Replace elements in the array*/

				array.splice(indexToStart, numberOfIndices, 'stringToAdd');
				
## More Array Methods
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/**/