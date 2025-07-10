// Animate elements on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.rating, .testimonial').forEach(el => {
    observer.observe(el);
});

// Add hover effect to ratings
document.querySelectorAll('.rating').forEach((rating, index) => {
    rating.addEventListener('mouseenter', () => {
        rating.style.transform = 'translateX(10px)';
        rating.style.transition = 'transform 0.3s ease';
    });

    rating.addEventListener('mouseleave', () => {
        rating.style.transform = 'translateX(0)';
    });
});

// Add floating animation to testimonials
document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
    testimonial.style.animationDelay = `${index * 0.2}s`;
});

// Add sparkle effect to stars
document.querySelectorAll('.rating__stars img').forEach(star => {
    star.addEventListener('mouseenter', function() {
        this.classList.add('star-twinkle');
        setTimeout(() => {
            this.classList.remove('star-twinkle');
        }, 1000);
    });
});

// Animate header text typing effect
const headerText = document.querySelector('.header__content h1');
const text = headerText.textContent;
headerText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        headerText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Custom cursor effect
const cursor = document.querySelector('.cursor-effect');
let cursorVisible = false;

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
    cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;

    if (!cursorVisible) {
        cursor.style.opacity = 1;
        cursorVisible = true;
    }
};

const addCursorBlending = (e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
        target.closest('.rating') || target.closest('.testimonial')) {
        cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0) scale(1.5)`;
        cursor.style.background = 'var(--soft-pink)';
    }
};

const removeCursorBlending = () => {
    cursor.style.transform = `translate3d(${event.clientX - 10}px, ${event.clientY - 10}px, 0) scale(1)`;
    cursor.style.background = 'var(--soft-pink)';
};

// Only add cursor effect if not on touch device
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', addCursorBlending);
    document.addEventListener('mouseout', removeCursorBlending);
}

// Scroll to top functionality
const scrollButton = document.querySelector('.scroll-top');

const toggleScrollButton = () => {
    if (window.pageYOffset > 200) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', toggleScrollButton);
scrollButton.addEventListener('click', scrollToTop);

// Accessibility improvements
document.querySelectorAll('.rating, .testimonial').forEach(element => {
    element.setAttribute('tabindex', '0');
    
    element.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            element.click();
        }
    });
});

// Performance optimization
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        toggleScrollButton();
    });
}); 