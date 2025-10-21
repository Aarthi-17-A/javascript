

//what is the scope of var , let and const ?
//var --> function scoped
//let --> block scoped
//const --> block scoped




//var – function-scoped

//var is not block-scoped (like let), but function-scoped. So any var declared inside 
//   an if, for, or other block is accessible throughout the entire function.

//When var message = "hi" is declared inside the if block, it overwrites the earlier 
// var message = "hello" because both are in the same function scope.



// function greet(){
//     var message = "hello";
//     if(true){
//         var message = "hi";
//         console.log(message);   //
//     }
//     console.log(message);      //
// }       
// greet();






// let – Block-Scoped

// let is block-scoped, meaning it only exists inside the {} where it is declared.

// Inside the if block, a new message variable is created. It does not affect the one outside.

// So you get "hi" inside the if, and "hello" outside.



// function greet(){
//     let message = "hello";
//     if(true){
//         let message = "hi";
//         console.log(message);   //  
//     }
//     console.log(message);     //  
// }
// greet();






// const – Block-Scoped

// const is also block-scoped, like let.

// A new message is created inside the block — again, no conflict with the outer const.

// const means you cannot re-declare  the same variable, but you can still declare the 
// same variable name in different blocks.



// function greet(){
//     const message = "hello";
//     if(true){
//         const message = "hi";
//         console.log(message);  //  `
//     }
//     console.log(message);    //  
// }
// greet();



