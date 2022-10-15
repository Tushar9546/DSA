function houseParty(number){
    var steps = 0;
    var bag = 0;
    bag = number / 5;
    steps = Math.ceil(number / 5) - 1;
    if(number % 5 !== 0) {
         console.log(steps + 1);         
    }
    else {
        console.log(bag);
    }
}