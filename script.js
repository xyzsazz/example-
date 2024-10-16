document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typed-text', {
        strings: ["Satkrit Kadriya", "a Web Developer", "an AI Enthusiast", "a Creator"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    // Smooth scroll
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
