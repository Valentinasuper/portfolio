let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
}

ScrollReveal({ 
    //reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-items, .portfolio-container, .contact_1', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content h3, .about-content p', { origin: 'right' });

let typed = new Typed('.multiple-text', {
    strings: ['Full-stack', 'Front-End'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
 