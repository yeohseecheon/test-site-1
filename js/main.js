// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Improved Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let isScrollingDown = false;
let ticking = false;
const SCROLL_THRESHOLD = 450; // Amount of pixels to scroll up before showing navbar
let scrollDelta = 0;

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease-in-out';

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDifference = lastScrollTop - currentScrollTop;
            
            // Determine scroll direction
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                if (!isScrollingDown && currentScrollTop > 100) {
                    isScrollingDown = true;
                    scrollDelta = 0; // Reset scroll delta when direction changes
                    navbar.style.transform = 'translateY(-100%)';
                }
            } else {
                // Scrolling up
                if (isScrollingDown) {
                    scrollDelta += scrollDifference;
                    if (scrollDelta > SCROLL_THRESHOLD) {
                        isScrollingDown = false;
                        navbar.style.transform = 'translateY(0)';
                    }
                }
            }

            // Always show navbar at the top of the page
            if (currentScrollTop <= 0) {
                isScrollingDown = false;
                scrollDelta = 0;
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = currentScrollTop;
            ticking = false;
        });

        ticking = true;
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation to cards on scroll
const cards = document.querySelectorAll('.card');
const animateCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;
        
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for cards
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Listen for scroll to animate cards
window.addEventListener('scroll', animateCards);
// Initial check for cards in view
animateCards();

// Update copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear(); 