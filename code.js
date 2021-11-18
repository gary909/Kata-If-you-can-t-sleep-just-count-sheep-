function countSheep(num){
    let myNum = 1;
    let text = " Sheep...";
    
    for (var i = 1; i < num; i++) {
    text = text + (myNum + i) + text;

    }
  console.log(myNum + text);
}

console.log(countSheep(1)); // Return "1 sheep..."
console.log(countSheep(2)); // Return "1 sheep...2 sheep..."
console.log(countSheep(3)); // Return "1 sheep...2 sheep...3 sheep..."