let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
button.addEventListener("click",function(){
    changeColor();
    div.style.backgroundColor = h1.innerText;
})
function changeColor(){
    let a = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;
    let c = Math.floor(Math.random()*255)+1;
    h1.innerText = `rgb(${a},${b},${c})`;
}