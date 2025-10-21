//Here's a detailed overview of hoisting for let, var, and const in JavaScript:

//definition of hoisting in JavaScript:

//Hoisting in JavaScript: Hoisting is a mechanism where variable and function declarations 
// are moved to the top of their scope, regardless of where the actual declaration is made.
//  However, only the declaration is hoisted, not the assignment or initialization.

//In other words, when JavaScript executes code, it first scans for variable and 
//function declarations and "hoists" them to the top of their scope, allowing them to be 
//accessed before their actual declaration line is executed. 




//Var Hoisting
//1-var variables are "hoisted" to the top of their scope, which means the variable declaration 
// is moved to the top, regardless of where the actual declaration is made.
//2-The variable is initialized with a value of undefined.
//3-You can access var variables before they are declared without getting a ReferenceError.



console.log(x);undefined
 var x = 10;
//   //Is equivalent to:
//
//  var x;
// console.log(x); // undefined
// x = 10;


     
     // Example 1: Accessing var before declaration

// console.log(x); // undefined
// var x = 10;

// //Example 2: Redeclaring var
// var y = 10;
// console.log(y); 
// var y = 20;
// console.log(y); 






//Let and Const Hoisting
 //let and const variables are also hoisted to the top of their scope,
//  but they are not initialized until their actual declaration line is executed.
// Accessing let or const variables before their declaration will result in a ReferenceError.
// This is known as the "Temporal Dead Zone" (TDZ), where the variable is in scope but not yet initialized.

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// const y = 20;

//     // Example 1: Accessing let before declaration
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// Example 2: Let in a block scope
// {
//   let b = 20;
//   console.log(b); // 20
// }
// console.log(b); // ReferenceError: b is not defined




//const example
     // Example 1: Accessing const before declaration
// console.log(d); // ReferenceError: Cannot access 'd' before initialization
// const d = 10;

// Example 2: Const in a block scope
// {
//   const e = 20;
//   console.log(e); // 20
// }
// console.log(e); // ReferenceError: e is not defined


//Key Differences
//var variables are initialized with undefined when hoisted, while let and
//  const variables are not initialized until their declaration line is executed.
//var variables can be accessed before declaration without throwing an error, while let and const 
// variables will throw a ReferenceError if accessed before declaration                                                                                                                                                                  