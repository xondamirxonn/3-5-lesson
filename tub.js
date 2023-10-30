// let son = prompt("Sonni kiriting:");

// if (son  % 3 == 0) {
//     alert(son + "murakkab son");
//   } else {
//     alert(son + " tub son");
//   }

// let son = prompt("Sonni kiriting:") ;

// if ( son === 3) {
//   alert(son + " T son");
// } else {
//   alert(son + " M son");
// }
// let son = prompt("Sonni kiriting");

// for (let i = 2; i < son; i++) {
//   if (son % i === 0) alert("bu murakkab son");
//   else alert("bu tub son");
// }
// let n = prompt("Sonni kiriting:")
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) alert("bu murakkab son");

//   else{
//     alert("Tub son")
//   }

  
// }
// let n = prompt("Sonni kiriting:")
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) alert(n +" bu murakkab son");
//   break;
// }
// alert(n + " bu tub son");

// for (let i = 2; i < n; i++) {
//   if (n % i === 0) alert(n +" bu murakkab son");
//   temp;
//   break;
// }
// alert(n + " bu tub son");
// let n = prompt("Sonni kiriting:");
// let temp = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) alert("bu murakkab son");
//   temp++;
//   break;
// }
// while ((temp = 0)) alert("bu tub son");
 let n = prompt("Sonni kiriting:");
 let temp = 0;
 let m = 7;
 for (let i = 2; i < n; i++) {
   if (n % i === 0) {
     alert("bu murakkab son");
     temp++;
     break;
   }
 }
 while (temp == 0) {
   alert("bu tub son");
   break;
 }

// let temp = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) alert("bu murakkab son");
//   temp++;
//   break;
// }
// while ((temp === 0)) {
//   alert("bu tub son");
// }

// let temp = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) console.log("bu murakkab son");
//   temp++;
//   break;
// }
// while ((temp = 0)) {
//   console.log("bu tub son");
// }

// let isPrime = (n) => {
//   if (n === 2 || n === 3) return true;
//   if (n < 2 || n % 2 === 0) return false;

//   return isPrimeRecursive(n);
// };

// // The recursive function itself, tail-call optimized.
// // Iterate only over odd divisors (there's no point to iterate over even ones).

// const isPrimeRecursive = (n, i = 3, limit = Math.floor(Math.sqrt(n))) => {
//   if (n % i === 0) return false;
//   if (i >= limit) return true; // Heureka, we have a prime here!
//   return isPrimeRecursive(n, (i += 2), limit);
// };

// // Usage example

// for (i = 0; i <= 50; i++) {
//   alert(`${i} is ${isPrime(i) ? `a` : `not a`} prime`);
// }
