/* ═══════════════════════════════════════════════════
   BUBERS — GSAP Animation Engine
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ─── i18n Translation System ───
    const translations = {
        en: {
            'nav.about': 'About',
            'nav.products': 'Products',
            'nav.process': 'Process',
            'nav.contact': 'Contact',
            'hero.eyebrow': 'Premium Import & Distribution',
            'hero.t1': 'Global',
            'hero.t2': 'Brands',
            'hero.t3': 'to Turkey.',
            'hero.t4': 'Delivered.',
            'hero.sub': 'We bring global premium brands to the Turkish market. Backed by a strong trade infrastructure and the right marketing approach.',
            'hero.scroll': 'Explore',
            'about.heading': 'We don\'t import quality,<br><span class="accent-text">we build trust.</span>',
            'about.p1': 'Founded in 2026 in Ankara, Bubers is a foreign trade and marketing company that distributes globally recognized premium brands in Turkey. From sourcing to quality control, logistics to point of sale, we manage every step.',
            'about.p2': 'We don\'t just bring products, we write brand stories in Turkey together. Every partnership we build exists to deliver a flawless experience to the end consumer.',
            'about.founded': 'Founded',
            'products.heading': 'The collection we distribute:<br><span class="accent-text">GoBe Kids.</span>',
            'product.1': '5-compartment, spill-resistant snack container with a push-button spin. Kids love it, parents relax.',
            'product.2': 'A lunchbox and snack spinner in one. Two functions in a single product, practical and fun.',
            'product.3': 'Designed for bigger portions. Slide-open system with spacious compartments.',
            'product.4': 'Original design, colorful options. BPA-free, dishwasher-safe materials.',
            'product.5t': 'Detailed Design',
            'product.5': 'Each compartment is protected with a leak-proof lid. Easy to clean, easy to carry.',
            'process.label': 'Our Process',
            'process.heading': 'From sourcing to delivery,<br><span class="accent-text">end-to-end control.</span>',
            'process.s1t': 'Discovery & Analysis',
            'process.s1p': 'We research the market, evaluate the brand, and check for strategic fit. That\'s how the right partnerships begin.',
            'process.s2t': 'Agreement & Sourcing',
            'process.s2p': 'We sign distribution agreements with global brands and set up a reliable supply chain.',
            'process.s3t': 'Quality Control',
            'process.s3p': 'Every product goes through independent testing. Nothing hits the shelf without international certification.',
            'process.s4t': 'Logistics & Delivery',
            'process.s4p': 'From customs clearance to warehousing and distribution, everything is under our control.',
            'process.s5t': 'Marketing & Growth',
            'process.s5p': 'We position brands in the Turkish market, build awareness, and grow sales channels together.',
            'footer.heading': 'Let\'s talk<br>partnership.',
            'footer.office': 'Headquarters',
            'footer.phone': 'Phone',
            'footer.social': 'Social Media',
            'footer.privacy': 'Privacy Policy'
        },
        tr: {
            'nav.about': 'Hakkımızda',
            'nav.products': 'Ürünler',
            'nav.process': 'Süreç',
            'nav.contact': 'İletişim',
            'hero.eyebrow': 'Premium İthalat & Distribütörlük',
            'hero.t1': 'Dünya',
            'hero.t2': 'Markalarını',
            'hero.t3': 'Türkiye\'ye',
            'hero.t4': 'Taşıyoruz.',
            'hero.sub': 'Global premium markaları Türk pazarıyla buluşturuyoruz. Güçlü dış ticaret altyapımız ve doğru pazarlama anlayışıyla tanışın.',
            'hero.scroll': 'Keşfet',
            'about.heading': 'Kaliteyi ithal etmiyoruz,<br><span class="accent-text">güveni inşa ediyoruz.</span>',
            'about.p1': '2026 yılında Ankara\'da kurulan Bubers İthalat, dünya çapında bilinen premium markaların Türkiye distribütörlüğünü yapan bir dış ticaret ve pazarlama şirketidir. Tedarik sürecinden kalite kontrole, lojistikten satış noktasına kadar her aşamayı biz yönetiyoruz.',
            'about.p2': 'Sadece ürün getirmiyoruz, markaların Türkiye\'deki hikayesini birlikte yazıyoruz. Kurduğumuz her ortaklık, tüketiciye kadar kusursuz bir deneyim sunmak için var.',
            'about.founded': 'Kuruluş Yılı',
            'products.heading': 'Distribütörlüğünü yaptığımız<br><span class="accent-text">GoBe Kids koleksiyonu.</span>',
            'product.1': 'Buton ile dönen 5 bölmeli, dökülmeye dayanıklı atıştırmalık kabı. Çocuklar seviyor, anne babalar rahat ediyor.',
            'product.2': 'Hem beslenme çantası hem snack spinner. Tek üründe iki fonksiyon, pratik ve eğlenceli.',
            'product.3': 'Daha büyük porsiyonlar için tasarlandı. Sürgülü açılış sistemi ve geniş bölmeler.',
            'product.4': 'Orijinal tasarım, renkli seçenekler. BPA içermeyen, bulaşık makinesine uygun güvenli materyal.',
            'product.5t': 'Detaylı Tasarım',
            'product.5': 'Her bölme sızdırmaz kapakla korunuyor. Temizlemesi kolay, taşıması pratik.',
            'process.label': 'Çalışma Sürecimiz',
            'process.heading': 'Tedarikten teslimata,<br><span class="accent-text">uçtan uca kontrol.</span>',
            'process.s1t': 'Keşif ve Analiz',
            'process.s1p': 'Pazarı araştırıyoruz, markayı değerlendiriyoruz, stratejik olarak uyup uymadığına bakıyoruz. Doğru ortaklıklar böyle başlıyor.',
            'process.s2t': 'Anlaşma ve Tedarik',
            'process.s2p': 'Global markalarla distribütörlük anlaşması yapıyoruz, güvenilir bir tedarik zinciri kuruyoruz.',
            'process.s3t': 'Kalite Kontrol',
            'process.s3p': 'Her ürün bağımsız testlerden geçiyor. Uluslararası sertifikalar olmadan hiçbir şey rafa çıkmıyor.',
            'process.s4t': 'Lojistik ve Teslimat',
            'process.s4p': 'Gümrüklemeden depolamaya, dağıtımdan teslimata kadar her şey bizim kontrolümüzde.',
            'process.s5t': 'Pazarlama ve Büyüme',
            'process.s5p': 'Markayı Türkiye\'de konumlandırıyoruz, bilinirliği artırıyoruz ve satış kanallarını birlikte büyütüyoruz.',
            'footer.heading': 'İş birliği için<br>konuşalım.',
            'footer.office': 'Merkez Ofis',
            'footer.phone': 'Telefon',
            'footer.social': 'Sosyal Medya',
            'footer.privacy': 'Gizlilik Politikası'
        }
    };

    let currentLang = localStorage.getItem('bubers-lang') || 'tr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('bubers-lang', lang);
        document.documentElement.lang = lang;

        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // HTML content (for elements with <br> and <span>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Toggle active class on lang links
        const trLink = document.getElementById('langTR');
        const enLink = document.getElementById('langEN');
        if (trLink && enLink) {
            trLink.classList.toggle('lang-active', lang === 'tr');
            enLink.classList.toggle('lang-active', lang === 'en');
        }
    }

    // Language toggle click handlers
    const langTR = document.getElementById('langTR');
    const langEN = document.getElementById('langEN');

    if (langTR) {
        langTR.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('tr');
        });
    }
    if (langEN) {
        langEN.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }

    // Apply saved language on load
    if (currentLang !== 'tr') {
        setLanguage(currentLang);
    }


    // ─── Hero Background Slider ───
    const heroBgImages = [
        'assets/slider/1.jpg',
        'assets/slider/2.jpg',
        'assets/slider/3.jpg'
    ];
    const heroSlider = document.getElementById('heroBgSlider');
    if (heroSlider) {
        let currentSlideIndex = 0;
        
        // Create slide elements
        heroBgImages.forEach((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.className = 'hero-bg-slide';
            slide.style.backgroundImage = `url('${imgSrc}')`;
            if (index === 0) slide.classList.add('active');
            heroSlider.appendChild(slide);
        });

        // Rotate slides
        setInterval(() => {
            const slides = document.querySelectorAll('.hero-bg-slide');
            if (slides.length > 1) {
                slides[currentSlideIndex].classList.remove('active');
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                slides[currentSlideIndex].classList.add('active');
            }
        }, 5000); // Changed slide every 5 seconds
    }

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
        backgroundImage: 'radial-gradient(ellipse at center, rgba(0,71,171,0.03) 0%, transparent 70%)',
        scrollTrigger: {
            trigger: '.products-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5
    });

});

