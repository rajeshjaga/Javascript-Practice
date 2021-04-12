var count = 0;

function cc(card) {
  // Only change code below this line
  var countPlus = [
    [2, 3, 4, 5, 6],
    [7, 8, 9],
    [10, "J", "Q", "K", "A"],
  ];
  if (countPlus[0].indexOf(card) !== -1) {
    count++;
  }

  console.log(count);
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
