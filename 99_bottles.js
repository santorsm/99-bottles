const bottleSong = (num) => {

  //variable to hold current # of bottles
  let numBottles = num;

  while (numBottles > 1){
    console.log(`${numBottles} bottle${numBottles > 1 ? 's' : ''} of beer on the wall, ${numBottles} bottles of beer.`)
    console.log(`Take one down and pass it around, ${numBottles - 1} bottle${numBottles - 1 > 1 ? 's' : ''} of beer on the wall.`)
    numBottles--

  }
  console.log("1 bottle of beer on the wall, 1 bottle of beer.")
  console.log("Take one down and pass it around, no more bottles of beer on the wall.")
  console.log("No more bottles of beer on the wall, no more bottles of beer.")
  console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall.`)

}


// function bottleSong(n=5) {

// };

bottleSong(5);
