console.log("hello world");

document.addEventListener("DOMContentLoaded", function(event) {

let green = document.getElementById("green")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let blue = document.getElementById("blue")

function clickDom(){
  this.className += " animation";
}

green.addEventListener("click", clickDom)
})
