/**
 * @Author: Dastan Alam
 * @Date:   2025-07-10 05:45:27 PM   17:07
 * @Last Modified by:   Dastan Alam
 * @Last Modified time: 2025-07-11 11:18:42 AM   11:07
 */
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Dropdown menu for mobile
const serviceButtons = document.querySelectorAll('#mobile-menu button');
serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

    // Counter animation for stats
    document.addEventListener('DOMContentLoaded', function() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if(count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
            
            function updateCounter() {
                const count = +counter.innerText;
                const increment = target / speed;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            }
        });
        
        // FAQ toggle functionality
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                content.classList.toggle('hidden');
                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
            });
        });
        
        // Initialize testimonial carousel
        // $('.testimonial-carousel').owlCarousel({
        //     loop: true,
        //     margin: 20,
        //     nav: false,
        //     dots: false,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 2
        //         },
        //         1024: {
        //             items: 3
        //         }
        //     }
        // });
        
        // Custom navigation for carousel
        // $('.testimonial-next').click(function() {
        //     $('.testimonial-carousel').trigger('next.owl.carousel');
        // });
        // $('.testimonial-prev').click(function() {
        //     $('.testimonial-carousel').trigger('prev.owl.carousel');
        // });
    });


