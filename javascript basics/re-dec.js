//DECLARATION using var, let and const keywords.

//var
// var n = "jk"; 
// var value = 79;

//let
// let name = "seol";

//const
// const p = "seol";

//REDECLARE

//var
// var x = 10;
// var x = "seol"; 
// console.log(x); 



//variables declared with the var keyword can be redeclared without any error

//let
// let name= "jeon";
// let name= "seol";
// console.log(name);



//variables declared with the let keyword cannot be redeclared in the same scope.

// let num = "seven";
// {
//   let num = 97; 
//   console.log(num); 
// }
// console.log(num); 



//you can declare a variable with the same name in a different scope


//const
// const name = "jeon";
// const name = "seol";
// console.log(name);

//re-assign
// const name = "seol";
// name = "jk";
// console.log(name);





// - Attempting to redeclare variable with const throws a SyntaxError.
// - Attempting to reassign variable with const throws a TypeError.

// const person = { name: "seol" };
// person.name = "nik"; 
// console.log(person); 



// const numbers = [17, 11, 19];
// numbers.push(7); 
// console.log(numbers);



//However, if the const variable holds an object or an array, you can modify its properties or elements, but you cannot reassign the variable itself.