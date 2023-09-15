
const downArrow1 = document.querySelector(".downArrow1");
const downArrow2 = document.querySelector(".downArrow2");
const downArrow3 = document.querySelector(".downArrow3");
const downArrow4 = document.querySelector(".downArrow4");



const menu1 = document.querySelector(".down-menu-1");
const menu2 = document.querySelector(".down-menu-2");
const menu3 = document.querySelector(".down-menu-3");
const menu4 = document.querySelector(".down-menu-4");

// menu1.style.display = "none"

downArrow1.addEventListener("click", ()=>{
    menu1.classList.toggle('active');
})
downArrow2.addEventListener("click", ()=>{
    menu2.classList.toggle('active');
})
downArrow3.addEventListener("click", ()=>{
    menu3.classList.toggle('active');
})
downArrow4.addEventListener("click", ()=>{
    menu4.classList.toggle('active');
})