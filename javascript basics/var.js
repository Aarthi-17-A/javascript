// var name = "Aarthi";
// console.log(name); //aarthi

// var name = "aarthi"; //re-declaration allowed
// var name = "rishika";
// console.log(name); //output: rishika

3. Re-declaration Allowed with var
Unlike let and const, var allows re-declaring the same variable in the same scope.


var fruit = "apple";
var fruit = "banana"; // no error!
console.log(fruit); // Output: banana


//var is function-scoped, not block scoped like  let or const

function greet(){
    var message = "hello";
    if(true){
        var message = "hi";
        console.log(message);
    }
    console.log(message);
}
greet();
//Even though message was declared inside if, it's accessible throughout the function — NOT limited to the block!

// var is function-scoped, NOT block-scoped.

//So any var declared inside if, for, or {} is still part of the entire function scope.

Step 1: Call the function
greet();
Execution enters the greet() function

Step 2: First declaration and assignment
var message = "Hello";
✅ message is declared in the function scope and assigned "Hello".

At this point:
message === "Hello"

 Step 3: Inside the if (true) block

if (true) {
    var message = "Hi";
    console.log(message); // Output: Hi
}
Now here's the key part:

You’re using var again to declare message.

But since var is function-scoped, this doesn’t create a new variable — it refers to the same message declared earlier.

So "Hello" is overwritten by "Hi".

🔸 So message is now:
message === "Hi"
✅ Then it logs
console.log(message); // Output: Hi

Step 4: Back outside the if block
console.log(message); // Output: Hi
Even though you’re outside the if, you're still in the same function. Since the message variable belongs to the whole greet() function, it's still accessible — and it’s "Hi".

✅ So this also prints:

Hi
Final Output:
Hi
Hi
📌 Conclusion & Key Lesson:
var has function scope.

Declaring var message inside if does not make a new separate variable.

Both var message = "Hello"; and var message = "Hi"; are the same variable within the function.

If this was done with let instead:

function greet() {
    let message = "Hello";
    if (true) {
        let message = "Hi"; // this is a different block-scoped variable
        console.log(message); // Hi
    }
    console.log(message); // Hello
}
greet();
✅ You’d get:
Hi
Hello

2. Hoisting with var
JavaScript moves var declarations to the top of their scope — this is called hoisting.
But only the declaration is hoisted, not the value.

🔍 Example:

console.log(a); // Output: undefined (not an error!)
var a = 10;

var a;

Feature	var
Scope	Function-scoped
Hoisting	Yes (initializes as undefined)
Re-declaration	Allowed
Block-scoping	❌ Not supported
Temporal Dead Zone	❌ Doesn't have it

✅ 5. var vs let – Live Comparison Example
javascript
Copy
Edit
{
    var a = 10;
    let b = 20;
}
console.log(a); // ✅ 10
console.log(b); // ❌ ReferenceError
🔍 Explanation:
var is function-scoped → still accessible after block

let is block-scoped → not accessible outside block




