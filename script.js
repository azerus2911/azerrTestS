gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submitted with values:', formValues);
            
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    gsap.from('.hero h1', { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 0.2 
    });
    
    gsap.from('.hero p', { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 0.5 
    });
    
    gsap.from('.hero .btn', { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 0.8 
    });

    gsap.to('.hero-shapes .shape-1', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
    });
    
    gsap.to('.hero-shapes .shape-2', {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
    });
    
    gsap.to('.hero-shapes .shape-3', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
    });

    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    gsap.utils.toArray('.course-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 1
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 50,
        duration: 1
    });

    gsap.utils.toArray('.stat-item h3').forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        
        gsap.fromTo(stat, 
            { textContent: 0 }, 
            {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                duration: 2,
                textContent: target,
                snap: { textContent: 1 },
                ease: 'power2.out'
            }
        );
    });

    gsap.utils.toArray('.info-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            delay: i * 0.2
        });
    });

    gsap.from('.map-container', {
        scrollTrigger: {
            trigger: '.map-container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 1
    });

    gsap.from('.address-info', {
        scrollTrigger: {
            trigger: '.address-info',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3
    });
});