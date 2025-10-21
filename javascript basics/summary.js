//summary:

//var
   // -function scoped
  // Can be re-declared and updated
   //Gets hoisted (declaration moved to the top of the scope) with undefined as initial value

//example:
// function testVar() {
//   console.log(x); // undefined (not error, due to hoisting)
//   var x = 5;
//   console.log(x); 
// }
// testVar();



//let

//-Block-scoped
//-Can be updated, but not re-declared in the same scope
//-Gets hoisted, but not initialized, so accessing before declaration throws ReferenceError
 
//example:
// function testLet() {
//   //  console.log(y); // ReferenceError: Cannot access 'y' before initialization
//   let y =10;
//   console.log(y);
// }
// testLet();

//mistakes

//Using before declaration causes ReferenceError
//Can't re-declare in the same scope:

//let a = 5;
// let a = 6; // SyntaxError




//const

//-Block-scoped
//-Cannot be updated or re-declared
//-Must be initialized at declaration
//example:
//const PI = 3.14;
    // PI = 3.15; // TypeError
console.log(PI);

//summary

// | Keyword | Scope    | Hoisted | Reassignable | Redeclarable |                            
// | ------- | -------- | ------- | ------------ | ------------ | 
// | var   | Function | Yes     | Yes          | Yes          | 
// | let   | Block    | Yes     | Yes          | No           |   
// | const | Block    | Yes     | No           | No           | 

//-let, const are hoisted but not initialized(TDZ)