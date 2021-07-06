
document.getElementById("main").remove();
//removed main element
let newHeader1 = document.createElement('h1');
//created new tag <h1>
document.body.appendChild(newHeader1);
// appended a child to <h1>
newHeader1.id = "victory";
//changed element id = "victory"
newHeader1.innerHTML = "YOUR-NAME is the champion";
//added the string of text to the <h1> tag
const newHeader = document.querySelector("#victory");
//creates new variable that points to 'h1#victory'

// 1) index.html
// after index.js is processed
// no longer has DOM node 'main#main':
// Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
//https://www.tutorialspoint.com/remove-element-by-id-in-javascript

// 2) index.html
// after index.js is processed
//   has a 'newHeader' variable that points to node 'h1#victory':
// ReferenceError: newHeader is not defined
// ✓ no longer has DOM node 'main#main'
// ✓ has a 'newHeader' variable that points to node 'h1#victory'
// ✓ has a 'newHeader' variable that points to node 'h1#victory'
// ✓ has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

// 3) index.html
// after index.js is processed
//   has a 'newHeader' variable that points to node 'h1#victory':
// ReferenceError: newHeader is not defined

// 4) index.html
// after index.js is processed
//   has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:
// ReferenceError: newHeader is not defined