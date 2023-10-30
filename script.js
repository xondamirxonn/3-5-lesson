// let meva = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Lime",
//   "Pear",
//   "Strawberry",
//   "Kiwi",
//   "Orange",
//   "Pineapple",
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Lime",
//   "Pear",
//   "Strawberry",
//   "Kiwi",
//   "Orange",
//   "Pineapple",
// ];

// let str = "Lorem ipsum dolor sit amet.";

// for (let i = str.length - 1; i>=0; i--){ //  i belgisini o'rniga xohlagan narsa yozsam boladi
//   console.log(str[i])
// }

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (let i = 0; i < meva.length; i++) {
//   console.log(meva[i]);
// }

// let person = {
//   fName: "Eshmat",
//   lName: "Toshmat",
//   email: " eshamt@gmail.com",
//   age: 32,
//   isMarried: true,
// };

// for (let i in meva){
//   console.log(meva[i]);

// }

// for(let i in str) {
//   console.log(str[i]);
// }

// for(let kalitSoz in person) {
//   console.log(kalitSoz, person[kalitSoz]);
// }

// for(let fruit of meva){
//   console.log(fruit);
// }

// for (let char of str){
//   console.log(char);
// }

// let password = "1234";
// let input = prompt("Parolni kiriting: ");

// let found = false
// let changes = 6;

// while(changes){
//  changes--;
//  if(password === input){
//   found = true;
//  }

//  else if(changes > found){
//   input = prompt("Topolmadingiz parolni qaytadan kiriting "+ changes + " urunish qoldi" )
//  }

//  else{
//   alert("shans qolmadi 30 daqiqadan keyin urinib ko'ring")

//  }

// }

// do{
//   console.log(123);

// } while(false);

// while(password !== input){
//   input = prompt("Topolmadiz")
// }

let word = prompt("So'zni kiriting:");
let arr = word.split("");
let rev = arr.reverse();
console.log(rev.join(""));


