function checkDay(today){

  switch(today) {
      case 'monday':
        console.log(false);
        break;
      case 'tuesday':
        console.log(false);
        break;
      case 'wednesday':
        console.log(false);
        break;
      case 'thursday':
        console.log(false);
        break;
      case 'friday':
        console.log(false);
        break;
      case 'sunday':
        console.log(true);
        break;
      case 'saturday':
        console.log(true);
        break;
      default:
        console.log("That's not a day of the week!");

  }
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
} // end checkDay

checkDay('monday');
checkDay('sunday');
