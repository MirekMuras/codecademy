/** create objects and advance concepts*/

/** ###                         PRIVACY  
 * Certain languages have privacy built-in for objects, but JavaScript does not have this feature. 
 * Rather, JavaScript developers follow naming conventions that signal to other developers how to interact 
 * with a property. One common convention is to place an underscore _ before the name of a property to mean
 *  that the property should not be altered.
 * 
 * Both methods are used to respect the intention of properties prepeneded(_)
 * 
 * 1)   Getters : methods that get and return the value of internal proprties of an object
 *  - we use the 'get' keyword followed by a function
 *  - use an */ if ... else /** confitional check 
    -  Getters can perform an action on the data when getting a property.
    -  Getters can return different values using conditionals.
    -  The functionality of our code is easier for other developers to understand.  */

    const robot = {
        _model: '1E78V2',
        _energyLevel: 100,

        get energyLevel(){
          if(typeof this._energyLevel === 'number' ) {
            return `My current energy level is ${this._energyLevel} `
          } else {
            return "System malfunction: cannot retrieve energy level"
          }
        }
      };
      
      console.log(robot.energyLevel);


 /** 2)   Setters : can safely reasign property value 
  * - setter methods which reassign values of existing properties within an object.
  * - Setter methods  do not need to be called with a set of parentheses.
  *  Syntactically, it looks like we’re reassigning the value of a property. */
  
  
  const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,

  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
  set numOfSensors(num) {
    if(typeof num === 'number' && num >=  0) {
       this._numOfSensors = num
    }
    else {
       'Pass in a number that is greater than or equal to 0'
    }
  }  
};

robot.numOfSensors = 1000;
console.log(robot.numOfSensors)

  /** Both methods is that properties cannot share the same name as the getter/setter function. 
  * If we do so, then calling the method will result in an infinite call stack error.
  * One workaround is to add an underscore before the property name like we did in the example above.
 */

 // ###                               FACTORY FUNCTIONS
 /**A factory function is a function that returns an object and can be reused to make multiple object instances.
  * Factory functions can also have parameters allowing us to customize the object that gets returned. */
 
  const  robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log(`${model} ${mobile}`)
    }
  }
}

const tinCan = robotFactory('P-500',true)

tinCan.beep()

// ###                              PROPERTY VALUE SHORTHAND
/** - don’t have to repeat ourselves for property assignments!
 * - to include more properties, that process would quickly become tedious!
 * But we can use a destructuring technique, called property value shorthand, 
 * to save ourselves some keystrokes. The example below works exactly like the example above:
*/
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// ###                              DESTRUCTURED ASSIGNMENT
/** we can also take advantage of a destructuring technique called destructured
 *  assignment to save ourselves some keystrokes. In destructured assignment we create a variable 
 * with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. 
 * Take a look at the example below:*/
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// Instead writing this
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

//We write
const {residence} = vampire
console.log(residence) // Prints 'Transylvania'

// ###                              BUILD-IN OBJECT METHODS
/** LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
*/
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true})

console.log(newRobot);