const _ = {

clamp(number,lower, upper) {
    const lowerClampedValue  = Math.max(number, lower);
    const clampedValue  = Math.min(lowerClampedValue,upper);
    return clampedValue;    
},

inRange(number, start, end) { 
    if(!end) {
      end = start;
      start = 0;
    }

    if( start > end) {
      let temp = 0;
      temp = end;
      end =  start;
      start = temp;
    }

    var isInRange = Boolean(true);
    if(start <= number && number < end) {
      return isInRange
    }
    else return false;    
},

words(string) {
    var words = string.split(' ');
    return words;
},

pad(string, length) {

    if(string.length >= length) return string;

      const padDifference= (length - string.length)/2;
      const startPaddingLength = Math.floor(padDifference);
      const endPaddingLength = (length - string.length) - startPaddingLength;
      console.log(endPaddingLength)
      const paddedString = 
       ' '.repeat(startPaddingLength) + 
       string + 
       ' '.repeat(endPaddingLength);
      return paddedString;

},

has(object,key) {
    var hasValue = true
    if( object[key] !== undefined) return hasValue;
    else return false; 
},

invert(object) {
  var invertedObject = {};
  for( var key in object) {
    var originalValue = object[key];
    invertedObject[originalValue] = key;
  }
  return invertedObject;
},

findKey(object, predicate) {
      for(var key in object) {
        var value = object[key];
        var predicateReturnValue = predicate(value);
       
        if (predicateReturnValue) return key;
      }      
},

drop(array, dropDown) {

    if( dropDown === null) return dropDown = 1;

    array.slice( e => 
        
        
        
        
        )
},

  


}




// Do not write or modify code below this line.
module.exports = _;