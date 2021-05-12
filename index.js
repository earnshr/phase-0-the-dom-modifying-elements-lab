const element = document.querySelector("main#main");
element.remove();

let newHeader1 = document.createElement("h1");
document.body.appendChild(newHeader1);
newHeader1.id = "victory";
newHeader1.innerHTML = "Shawn is the champion";
const newHeader = document.querySelector("#victory");