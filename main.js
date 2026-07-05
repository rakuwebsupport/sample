/* ==========================================================
   Frontier Construction
   main.js
========================================================== */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    if (loading) {

        setTimeout(()=>{

            loading.style.opacity="0";

            loading.style.visibility="hidden";

        },2500);



    }

});

/* ==========================================================
   Header Scroll
========================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ==========================================================
   Fade Animation
========================================================== */

const fadeElements = document.querySelectorAll(".fade");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

fadeElements.forEach(el => fadeObserver.observe(el));

/* ==========================================================
   Count Up Animation
========================================================== */

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 100);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current.toLocaleString();

        }, 20);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .6

});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================================================
   FAQ
========================================================== */

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const opened = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(item => {

            item.style.display = "none";

        });

        if (!opened) {

            answer.style.display = "block";

        }

    });

});

/* ==========================================================
   Hamburger Menu
========================================================== */

const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector("nav");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        nav.classList.toggle("active");

    });

}

/* ==========================================================
   Close Menu
========================================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            hamburger.classList.remove("active");

            nav.classList.remove("active");

        }

    });

});

/* ==========================================================
   Smooth Scroll
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   Hero Fade
========================================================== */

const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const value = window.scrollY;

    hero.style.opacity = Math.max(1 - value / 700, 0);

});

/* ==========================================================
   Button Hover Ripple
========================================================== */

document.querySelectorAll(".btn-primary").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        button.style.setProperty("--x", `${e.clientX - rect.left}px`);

        button.style.setProperty("--y", `${e.clientY - rect.top}px`);

    });

});

/* ==========================================================
   Card Hover Tilt
========================================================== */

document.querySelectorAll(".service-card,.work-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;

        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ==========================================================
   Scroll Progress Bar
========================================================== */

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0";
progress.style.background = "#0A72D8";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent = (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});

/* ==========================================================
   Reveal Footer
========================================================== */

const footer = document.querySelector("footer");

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            footer.style.opacity = 1;

            footer.style.transform = "translateY(0)";

        }

    });

});

if (footer) {

    footer.style.opacity = 0;

    footer.style.transform = "translateY(50px)";

    footer.style.transition = "1s";

    footerObserver.observe(footer);

}

console.log("Frontier Construction Ready.");


/* ==========================================
Works Slider
========================================== */

const slides=document.querySelector(".slides");

const slide=document.querySelectorAll(".slide");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let index=0;

function moveSlide(){

slides.style.transform=`translateX(-${index*100}%)`;

}

next.addEventListener("click",()=>{

index++;

if(index>=slide.length){

index=0;

}

moveSlide();

});

prev.addEventListener("click",()=>{

index--;

if(index<0){

index=slide.length-1;

}

moveSlide();

});

setInterval(()=>{

index++;

if(index>=slide.length){

index=0;

}

moveSlide();

},5000);


/*=========================================
Before After Slider
=========================================*/

const compare = document.querySelector(".compare");

if(compare){

const after = compare.querySelector(".after-wrapper");

const line = compare.querySelector(".slider-line");

let dragging = false;

compare.addEventListener("mousedown",()=>{

dragging=true;

});

window.addEventListener("mouseup",()=>{

dragging=false;

});

window.addEventListener("mousemove",(e)=>{

if(!dragging) return;

const rect=compare.getBoundingClientRect();

let x=e.clientX-rect.left;

if(x<0)x=0;

if(x>rect.width)x=rect.width;

const percent=(x/rect.width)*100;

after.style.width=percent+"%";

line.style.left=percent+"%";

});

compare.addEventListener("touchmove",(e)=>{

const rect=compare.getBoundingClientRect();

let x=e.touches[0].clientX-rect.left;

if(x<0)x=0;

if(x>rect.width)x=rect.width;

const percent=(x/rect.width)*100;

after.style.width=percent+"%";

line.style.left=percent+"%";

});

}

/*=========================================
Before After Demo
=========================================*/

const guide=document.querySelector(".drag-guide");

if(compare){

let auto=true;

let percent=50;

let direction=1;

const autoSlide=setInterval(()=>{

if(!auto){

clearInterval(autoSlide);

return;

}

percent+=direction*0.35;

if(percent>82){

direction=-1;

}

if(percent<18){

direction=1;

}

after.style.width=percent+"%";

line.style.left=percent+"%";

},16);

compare.addEventListener("mousedown",()=>{

auto=false;

guide.classList.add("hide");

});

compare.addEventListener("touchstart",()=>{

auto=false;

guide.classList.add("hide");

});

}


/*====================================
Parallax Fade
====================================*/

const parallax=document.querySelector("#parallax");

window.addEventListener("scroll",()=>{

if(!parallax) return;

const y=window.scrollY;

parallax.style.backgroundPositionY=-(y*0.25)+"px";

});

/*==================================
Floating CTA
==================================*/

const floatingCTA = document.querySelector(".floating-cta");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

floatingCTA.style.opacity="1";

floatingCTA.style.transform="translateY(0)";

}else{

floatingCTA.style.opacity="0";

floatingCTA.style.transform="translateY(30px)";

}

});

/*====================================
Gallery Modal
====================================*/

const gallery=document.querySelectorAll(".gallery-image");

const modal=document.getElementById("imageModal");

const modalImg=document.getElementById("modalImage");

const closeBtn=document.querySelector(".modal-close");

const nextImg=document.querySelector(".next-image");

const prevImg=document.querySelector(".prev-image");

let current=0;

gallery.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

modal.classList.add("active");

modalImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

});

function showImage(){

modalImg.src=gallery[current].src;

}

nextImg.addEventListener("click",(e)=>{

e.stopPropagation();

current++;

if(current>=gallery.length){

current=0;

}

showImage();

});

prevImg.addEventListener("click",(e)=>{

e.stopPropagation();

current--;

if(current<0){

current=gallery.length-1;

}

showImage();

});

document.addEventListener("keydown",(e)=>{

if(!modal.classList.contains("active")) return;

if(e.key==="Escape"){

modal.classList.remove("active");

}

if(e.key==="ArrowRight"){

current++;

if(current>=gallery.length){

current=0;

}

showImage();

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){

current=gallery.length-1;

}

showImage();

}

});
