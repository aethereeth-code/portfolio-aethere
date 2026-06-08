// ======================
// NAVBAR EFFECT
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ======================
// REVEAL ON SCROLL
// ======================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const trigger =
            window.innerHeight - 100;

        if (sectionTop < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ======================
// HERO PARALLAX
// ======================

const photo =
    document.querySelector(".hero-center img");

if (photo) {

    document.addEventListener("mousemove", (e) => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 60;

        const y =
            (window.innerHeight / 2 - e.clientY) / 60;

        photo.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// ======================
// BUTTON HOVER EFFECT
// ======================

const buttons =
    document.querySelectorAll(
        ".hero button, .talk-btn"
    );

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";

    });

});


// ======================
// SCROLL INDICATOR HIDE
// ======================

const scrollIndicator =
    document.querySelector(".scroll");

window.addEventListener("scroll", () => {

    if (!scrollIndicator) return;

    if (window.scrollY > 100) {

        scrollIndicator.style.opacity = "0";

    } else {

        scrollIndicator.style.opacity = "1";

    }

});

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(){

        document.querySelectorAll('.nav-links a')
        .forEach(item => item.classList.remove('active'));

        this.classList.add('active');

    });

});

const modal = document.getElementById('roleModal');
const title = document.getElementById('roleTitle');
const desc = document.getElementById('roleDescription');

function showRole(type){

    modal.classList.add('active');

    if(type === 'system'){

        title.innerText = 'System Builder';

        desc.innerText =
        'I design and develop custom digital systems that help businesses streamline operations, manage data efficiently, automate workflows, and improve productivity through tailored web-based solutions.';

    }

    if(type === 'web'){

        title.innerText = 'Web Developer';

        desc.innerText =
        'I create responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, PHP, and MySQL. My focus is performance, clean code, and delivering practical solutions for real business needs.';

    }
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        modal.classList.remove('active');
    }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

});
document.getElementById('backTop').addEventListener('click', function(e){

    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});