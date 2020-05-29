/** There are only seven fundamental data types in JavaScript,
 *  and six of those are the primitive data types: 
 * 1) string,
 * 2) number,
 * 3) boolean,
 * 4) null,
 * 5) undefined,
 * 6) and symbol.
 * 
 * 7) objects : with javaScript object we can model real-wolrd things, like baskatball, car, house, or
 *  objects to build tha data structures that make the web possible.
 * - Objects store collections of key-value pairs.
 * - Objects are containers storing data and functions.
 * - Objects are mutable—we can change their properties even when they’re declared with const. * 
 *  */

 // object can be asssigned to variable using curly braces,to designate an object literal
 // An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
 let spaceship = {}; 

 /**  an object is filled with unordered data, which are organized into Key - Value parts 
  * Key = it is like variable name pointing to a location in memory that hold value ( Strings data types)
  * Value - Key's Value can be of any data type.
  * 
  * We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value.
  * We separate each key-value pair in an object literal with a comma (,).
 */
let _objectName = {
    'object_proparty': 'object_Value',
     object_proparty: 'object_Value',

}

//###                                           ACCESS OBJECT

// 1) One way to access an object is by - dot notation '.'
// if a proprty does not exist in an object , 'undifined' will be returned
_objectName.object_proparty;

// 2) the second way to access an object is by - bracket notation '[]'
// use bracket notation when accessing key/indexing in an array 
['A','B','C'] [0]  // return A
// also use a variable inside the brackets to select the key of an object. Helpful when working with functions
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

const _objectExist = _objectName[object_proparty]  // return '_objectName.object_property.object_Value'


//###                                           ASSIGNMENT PROPRTY

/**  Object are MUTABLE, meaning we can update them after we create them .
 * Using .notstion, []notation and the =assignment operator to add new key-value pairs to an object
 *  or change an existing property.
 * You can access, add or edit a property within an object by using dot notation or bracket notation.*/

 _objectName[object_proparty] = 'new_object_Value'
 objectName.object_proparty = 'new_object_Value'

 //###                                              DELETE PROPRTY
 delete _objectName.object_proparty;
 delete _objectName['object_proparty'];


 //###                                                  METHODS
 /** Data stored in an object is called .methods() . 
  * Each key-value pair is a property—when a property is a function it is known as a method.
 */
 let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

 const alienShip = {
   retreat () {
     console.log(retreatMessage)
   }, 
   takeOff() {
     console.log('Spim... Borp... Glix... Blastoff!')
   }
 }
 
 alienShip.retreat();
 alienShip.takeOff();

//###                                               NESTED OBJECT
/** */
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  //Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
  const capFave = spaceship.crew.captain['favorite foods'][0]
  spaceship.passenger

  //assign as its value an array of objects. 
  spaceship.passengers = [{name: 'Space Dog'}]
  
  //assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made).
  const firstPassenger = spaceship.passengers[0]

  //###                                                 PASS BY REFERENCE

  /**This means when we pass a variable assigned to an object into a function as an argument,
   *  the computer interprets the parameter name as pointing to the space in memory holding that object.
   *  As a result, functions which change object properties actually mutate the object permanently
   *  (even when the object is assigned to a const variable). */
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// reassigne object key
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}
// assigne a new object key
let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)





