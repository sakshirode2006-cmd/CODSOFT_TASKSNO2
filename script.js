// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// =============================
// Active Navbar on Scroll
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop-150;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){
link.classList.add("active");
}

});

});

// =============================
// Reveal Animation
// =============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

reveals.forEach(item=>{

const windowHeight = window.innerHeight;

const revealTop = item.getBoundingClientRect().top;

if(revealTop < windowHeight-100){

item.classList.add("active");

}

});

}

// =============================
// Back To Top
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}
else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};