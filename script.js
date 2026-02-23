/* ═══════════════════════════════════════════════════
   BUBERS — GSAP Animation Engine
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ─── Hero Entrance Animations ───
    const heroTL = gsap.timeline({ defaults: { ease: 'power4.out' } });

    heroTL
        .to('.hero-eyebrow', {
            opacity: 1,
            duration: 0.8,
            delay: 0.3
        })
        .to('.title-word', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.08,
        }, '-=0.4')
        .to('.hero-sub', {
            y: 0,
            opacity: 1,
            duration: 0.8
        }, '-=0.6')
        .to('.scroll-indicator', {
            opacity: 1,
            duration: 0.6
        }, '-=0.3');

    // ─── Scroll Indicator Hide on Scroll ───
    gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '20% top',
            scrub: true
        }
    });

    // ─── Navbar Scroll Effect ───
    const navbar = document.getElementById('navbar');
    ScrollTrigger.create({
        start: 80,
        onUpdate: (self) => {
            if (self.scroll() > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // ─── Reveal Items on Scroll ───
    const revealItems = gsap.utils.toArray('.reveal-item');
    revealItems.forEach((item, i) => {
        gsap.to(item, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                toggleActions: 'play none none none'
            },
            delay: (i % 4) * 0.08 // subtle stagger within viewport groups
        });
    });

    // ─── Products Swiper ───
    new Swiper('.productsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.products-pagination',
            clickable: true
        }
    });

    // ─── Process Step Line Grow ───
    const stepLines = gsap.utils.toArray('.step-line');
    stepLines.forEach(line => {
        gsap.from(line, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: line,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ─── Parallax Float on About Year Number ───
    gsap.to('.year-number', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // ─── Footer Brand Parallax ───
    gsap.to('.footer-brand', {
        x: 60,
        ease: 'none',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // ─── Magnetic CTA Button ───
    const ctaBtn = document.querySelector('.nav-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('mousemove', (e) => {
            const rect = ctaBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(ctaBtn, {
                x: x * 0.15,
                y: y * 0.15,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        ctaBtn.addEventListener('mouseleave', () => {
            gsap.to(ctaBtn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.4)'
            });
        });
    }

    // ─── Mobile Hamburger Menu ───
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── Smooth Anchor Scroll ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ─── Section Label Line Animation ───
    gsap.utils.toArray('.section-label').forEach(label => {
        gsap.from(label, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: label,
                start: 'top 88%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ─── Products Section Glow ───
    gsap.to('.products-section', {
        backgroundImage: 'radial-gradient(ellipse at center, rgba(200,169,126,0.03) 0%, transparent 70%)',
        scrollTrigger: {
            trigger: '.products-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5
    });

});

