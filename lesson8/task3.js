const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let bigchar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let smallchar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let big = 0;
let small = 0;

for (let char of str) {
   if (bigchar.includes(char)) {
       ++big;
   } 
   if (smallchar.includes(char)) {
       ++small;
   }
}
console.log('Big ' + big + '\n' + 'Small ' + small); 