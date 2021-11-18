var countSheep = function (num){
    let text = '';
    for (let i = 1; i <= num; i++) {
    text += i + ' sheep...';
    }
  return text;
}

console.log(countSheep(1)); // Return "1 sheep..."
console.log(countSheep(2)); // Return "1 sheep...2 sheep..."
console.log(countSheep(3)); // Return "1 sheep...2 sheep...3 sheep..."