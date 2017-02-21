function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // crateMax is the maximum widget capacity of the crate
  // crates start empty
  var widgets = 0;
  while (widgets < maxCapacity) {
    console.log("I have " + widgets + " widgets in the crate.");
    widgets++;
    console.log("Adding another widget...");
  }
  // write a while loop that puts more widgets in the crate until it is full
  // return the number of widgets added to the crate in the while loop
} // end fillCrate

fillCrate(11);
