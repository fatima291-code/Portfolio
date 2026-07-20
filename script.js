/* ==========================================
   PORTFOLIO JAVASCRIPT
   Tamkeen Tahira Portfolio
========================================== */


/*=============================
        DARK MODE
==============================*/

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    else{

        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


/*=============================
      RANDOM QUOTE API
==============================*/

const quoteBtn = document.getElementById("quoteBtn");

const quoteText = document.getElementById("quoteText");

quoteBtn.addEventListener("click", getQuote);

async function getQuote(){

quoteText.innerHTML="Loading Quote...";

try{

const response = await fetch("https://api.quotable.io/random");

const data = await response.json();

quoteText.innerHTML = `"${data.content}" <br><br> — <strong>${data.author}</strong>`;

}

catch{

quoteText.innerHTML="Unable to load quote. Please try again.";

}

}


/*=============================
      NAVBAR ACTIVE LINK
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=============================
      SCROLL TO TOP
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.right="25px";

topButton.style.bottom="25px";

topButton.style.width="50px";

topButton.style.height="50px";

topButton.style.border="none";

topButton.style.borderRadius="50%";

topButton.style.background="#2563EB";

topButton.style.color="white";

topButton.style.fontSize="22px";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*=============================
     CONTACT FORM
==============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


/*=============================
      FADE ANIMATION
==============================*/

const cards=document.querySelectorAll(

".skill-card,.project-card,.timeline-card,.stat-box"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition="all .8s ease";

observer.observe(card);

});


/*=============================
        LOADING
==============================*/

window.onload=function(){

console.log("Premium Portfolio Loaded Successfully!");

};