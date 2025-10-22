let heading = document.getElementById("heading"); //select elements
heading.innerHTML = "<span style='color:red'>HTML inside</span>"; // text + html  //changing content
heading.style.fontSize = "40px";   //changing style
heading.style.backgroundColor = "yellow";  //changing style

let button = document.getElementById("btn"); //select elements
let paragraph = document.querySelector(".text");//select elements
paragraph.innerHTML = "<span style='color:purple'>how are you?</span>"; //changing content

// let input = document.getElementById("inputBox");
// button.addEventListener("click", function(){ 
//     alert("Button clicked!");
//     console.log("You typed:", input.value);   //🔹 Getting Input Values
//     heading.innerText = "iam aarthi"; //changing content
//     heading.style.color="pink";  //changing style
//     paragraph.innerText="BCA student"; //changing content
//     paragraph.style.color="pink";   //changing style
// });

let input = document.getElementById("inputBox");     //🔹 Getting Input Values

input.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
  console.log("Current value:", input.value);
});

//🔹 Creating & Adding Elements

let newitem = document.createElement("li");
newitem.innerText="Orange";
document.getElementById("list").appendChild(newitem);

let second = document.createElement("li");
second.innerText="Grapes";
document.getElementById("list").appendChild(second);

let list = document.getElementById("list");   //🔹 Removing Elements
list.removeChild(list.children[1]);

let items = document.querySelectorAll("li");
items.forEach((item,i)=>{
    item.style.color = i % 2 === 0 ? "green" : "purple";
});

setTimeout(()=> alert("Hi I'am Aarthi"),2000);

// let count = 0;
// setInterval(()=>{
//     count++;
//     console.log("count:" , count);
// },1000)

let count = 0;
let timer = setInterval(()=>{
    count++;
    console.log("count:", count);
    if(count === 5){
        clearInterval(timer);
    }
},1000);


// Think of localStorage as a locker in your browser.
// setItem → put something inside locker with a label.
// getItem → open locker and take it out.
// removeItem → throw away one thing.
// clear → empty the whole locker.

localStorage.setItem("name" , "Aarthi");   //Stores a value "Aarthi" under the key "name".
console.log(localStorage.getItem("name"));  //Reads the value for the key "name". output: Aarthi
localStorage.removeItem("name");          //Erases only "name" from storage.\
localStorage.clear();                    //Clears all data , Deletes everything from localStorage.


// Local Storage can only save strings (text), not objects or arrays directly.
// If you want to save arrays/objects → you must convert them using JSON.stringify.
// When you read them back → use JSON.parse.