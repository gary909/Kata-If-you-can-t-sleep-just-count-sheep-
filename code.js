// var countSheep = function (num){
//     //your code here
//     var myNum = 1;
//     var myText = myNum + " sheep...";
//     for (var i = 0; i < num.length; i++){
//         // myText =  myText + myNum;
//         myNum = myNum + 1;
//     }
//     console.log(myText);
// }

function countSheep(num){
    let myNum = 1;
    let text = " Sheep...";
    
    for (var i = 1; i < num; i++) {
    text = text + (myNum + i) + text;
        // myNum + text;
    }
  console.log(myNum + text);
}

console.log(countSheep(1)); // Return "1 sheep..."
console.log(countSheep(2)); // Return "1 sheep...2 sheep..."
console.log(countSheep(3)); // Return "1 sheep...2 sheep...3 sheep..."