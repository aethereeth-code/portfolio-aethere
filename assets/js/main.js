// ======================
// NAVBAR EFFECT
// ======================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

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

if (scrollIndicator) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            scrollIndicator.style.opacity = "0";

        } else {

            scrollIndicator.style.opacity = "1";

        }

    });

}


// ======================
// ACTIVE NAV
// ======================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(){

        document.querySelectorAll('.nav-links a')
        .forEach(item => item.classList.remove('active'));

        this.classList.add('active');

    });

});


// ======================
// MODAL
// ======================

const modal = document.getElementById('roleModal');
const title = document.getElementById('roleTitle');
const desc = document.getElementById('roleDescription');

function showRole(type){

    if(!modal || !title || !desc) return;

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

const closeBtn =
    document.querySelector('.close-modal');

if(closeBtn && modal){

    closeBtn.addEventListener('click', () => {

        modal.classList.remove('active');

    });

}

window.addEventListener('click', (e) => {

    if(modal && e.target === modal){

        modal.classList.remove('active');

    }

});

document.addEventListener('keydown', (e) => {

    if(modal && e.key === 'Escape'){

        modal.classList.remove('active');

    }

});


// ======================
// HAMBURGER
// ======================

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

if(hamburger && navLinks){

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navLinks.classList.toggle("active");

    });

}


// ======================
// BACK TO TOP
// ======================

const backTop =
    document.getElementById('backTop');

if(backTop){

    backTop.addEventListener('click', function(e){

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

}


// ======================
// CERTIFICATES
// ======================
/* CERTIFICATES */

const cards = document.querySelectorAll(".cert-card");

if(cards.length){

let current = 0;

    function updateCarousel(){

        cards.forEach(card => {

            card.classList.remove(
                "active",
                "left",
                "right",
                "far-left",
                "far-right"
            );

        });

        cards[current].classList.add("active");

        cards[(current - 1 + cards.length) % cards.length]
            .classList.add("left");

        cards[(current - 2 + cards.length) % cards.length]
            .classList.add("far-left");

        cards[(current + 1) % cards.length]
            .classList.add("right");

        cards[(current + 2) % cards.length]
            .classList.add("far-right");

    }

    function nextSlide(){

        current = (current + 1) % cards.length;

        updateCarousel();

    }

    function prevSlide(){

        current = (current - 1 + cards.length) % cards.length;

        updateCarousel();

    }

    updateCarousel();

    /* AUTO PREMIUM */

   autoPlay = setInterval(nextSlide, 2500);

    /* DRAG */

    let startX = 0;
    let isDragging = false;

    document.querySelector(".cert-slider")
    ?.addEventListener("pointerdown", (e) => {

        clearInterval(autoPlay);

        isDragging = true;

        startX = e.clientX;

    });

    document.addEventListener("pointermove", (e) => {

        if(!isDragging) return;

        const diff = e.clientX - startX;

        if(diff > 80){

            prevSlide();

            startX = e.clientX;

        }

        else if(diff < -80){

            nextSlide();

            startX = e.clientX;

        }

    });

    document.addEventListener("pointerup", () => {

        if(!isDragging) return;

        isDragging = false;

        clearInterval(autoPlay);

      autoPlay = setInterval(nextSlide, 2500);

    });

}