var andTruthTable = [true  && true,
                     true  && false,
                     false && true,
                     false && false];

// in the array 'andTruthtable', how many elements are true?
// uncomment the next line and replace ___ with the appropriate value
var numberOfTrueElements = 1; //true && true



var orTruthTable = [true  || true,
                    true  || false,
                    false || true,
                    false || false];

// in the array 'orTruthTable', how many elements are false?
// uncomment the next line and replace ___ with the appropriate value
var numberOfFalseElements = 1; // false || false

function opposite(booleanValue) {
    if (booleanValue) {
      return false;
    }
    else {
      return true;
    }

  // complete this function so that it always returns the opposite of whatever value is passed in
  // for example `opposite(true) === false` and `opposite(false) === true`
}

console.log(opposite(false));
console.log(opposite(true));
