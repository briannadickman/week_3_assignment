function shoesOnTheBus(kidsOnTheBus){
  var shoesOnKids = []; //array
  for (var i = 0; i <= kidsOnTheBus; i++){
        shoesOnKids.push(i * 2);
  }
  return shoesOnKids;

  // this function accepts the number of kids on the bus
  // assume each kid on the bus is wearing 2 shoes
  // write a for loop that counts how many shoes are on the bus
  // this function should return the number of shoes on the bus
} // end shoesOnTheBus

shoesOnTheBus();
console.log(shoesOnTheBus(4));
