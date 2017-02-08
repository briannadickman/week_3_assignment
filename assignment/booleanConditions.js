
function isCartonFull(eggsInCarton, cartonCapacity){
    if (eggsInCarton == cartonCapacity) {
      console.log(true);
    }
    else if (eggsInCarton > cartonCapacity) {
      console.log('You have too many eggs!');
    }
    else {
      console.log(false);
    }
  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
} // end checkIfCartonIsFull

isCartonFull(10, 12);
isCartonFull(15, 12);
isCartonFull(12, 12);
