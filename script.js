document.addEventListener('DOMContentLoaded', () => {

    // Minimalist Navbar Scroll Effect
    const nav = document.querySelector('.nav-minimal');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Smooth Fade & Reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve to animate only once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Simple Parallax Effect for Hero Image
    const parallaxImg = document.querySelector('.parallax-img');
    const heroSection = document.querySelector('.hero-section');

    window.addEventListener('scroll', () => {
        if (!parallaxImg || !heroSection) return;

        let scrollPosition = window.scrollY;

        // Only trigger parallax if we are in the hero section
        if (scrollPosition < window.innerHeight) {
            // Move image down slowly as user scrolls down
            parallaxImg.style.transform = `translateY(calc(-10% + ${scrollPosition * 0.15}px))`;
        }
    });

    // Image Scale effect on scroll for Product
    const productImg = document.querySelector('.scale-on-scroll');
    const productSection = document.querySelector('.product-showcase-v2');

    window.addEventListener('scroll', () => {
        if (!productImg || !productSection) return;

        const rect = productSection.getBoundingClientRect();
        // Check if section is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Calculate percentage of progress through the section
            const scrollPercent = 1 - (rect.bottom / (window.innerHeight + rect.height));

            // Map percentage to a scale value (e.g. 1 to 1.1)
            const scaleValue = 1 + (scrollPercent * 0.15);
            productImg.style.transform = `scale(${Math.min(Math.max(scaleValue, 1), 1.15)})`;
        }
    });
});
