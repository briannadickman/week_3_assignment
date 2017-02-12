var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evensArray = [];


function onlyEvens() {
  for (var i = 0; i < numbers.length; i ++) {
    if (i % 2 === 0) {
      evensArray.push(i);
    }
    else {
    }
  }
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`
}

// console.log(evensArray);
onlyEvens(numbers);
console.log("First array = " + evensArray);
