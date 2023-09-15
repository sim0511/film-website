
/* menu-open ==================== */

const root = document.documentElement;

const btnMode = document.querySelector(".btn-mode");
const close = document.querySelector(".close-btn");


close.style.display="none";

btnMode.addEventListener("click", (e)=>{
  document.body.classList.toggle('menu-open');
  close.style.display = "block";
});


close.addEventListener("click",(e)=>{
  document.body.classList.remove("menu-open"); 
  close.style.display="none";
})

const mobileMenuLinks = document.querySelectorAll('.nava');


function scrollToSection(e) {
  e.preventDefault();
  const targetSectionId = e.target.getAttribute('href');
  const targetSection = document.querySelector(targetSectionId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    document.body.classList.remove('menu-open');
    close.style.display="none";
  }
}

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});




/* open search ============================ */

const search = document.querySelector(".search-btn");
const textInput = document.getElementById("text-input")
const searchClose = document.querySelector(".closeSearch-btn")

searchClose.style.display="none";

search.addEventListener("click", (e)=>{
  document.body.classList.toggle('search-open');
  textInput.style.display="block"; 
  searchClose.style.display="block";
  textInput.value="";
});

searchClose.addEventListener("click",(e)=>{

    document.body.classList.remove("search-open"); 
    searchClose.style.display="none";
  
})