
function isCartonFull(eggsInCarton, cartonCapacity){
    if (eggsInCarton == cartonCapacity) {
      return true;
    }
    else if (eggsInCarton > cartonCapacity) {
      return 'You have too many eggs!';
    }
    else {
      return false;
    }
  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
} // end checkIfCartonIsFull

isCartonFull(10, 12);
isCartonFull(15, 12);
isCartonFull(12, 12);
