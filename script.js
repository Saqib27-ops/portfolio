// script.js - complete functionality with animations, filters, particles
// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// Hover effect on links and buttons
document.querySelectorAll('a, button, .btn, .project-card, .blog-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Particle background
particlesJS('particle-canvas', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typed text effect
const typedText = document.querySelector('.typed-text');
const words = ['developer', 'designer', 'problem solver', 'creative coder'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Back to top button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project data
const projects = [
    {
        title: 'Vivid Dashboard',
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        description: 'Interactive analytics dashboard with real-time updates',
        tech: ['react', 'd3', 'express'],
        link: '#'
    },
    {
        title: 'Flow Space',
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        description: 'Task management with drag & drop and team collaboration',
        tech: ['vue', 'firebase', 'tailwind'],
        link: '#'
    },
    {
        title: 'Eatsy Recipe',
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        description: 'Smart recipe finder with ingredient highlighting',
        tech: ['next.js', 'prisma', 'postgres'],
        link: '#'
    },
    {
        title: 'Weather Vision',
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
        description: 'Beautiful weather app with animated backgrounds',
        tech: ['react', 'chart.js', 'openweather'],
        link: '#'
    },
    {
        title: 'TaskFlow Mobile',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        description: 'Mobile task manager with offline support',
        tech: ['react native', 'redux', 'sqlite'],
        link: '#'
    },
    {
        title: 'Portfolio 2025',
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        description: 'Modern portfolio with smooth animations',
        tech: ['html5', 'css3', 'javascript'],
        link: '#'
    }
];

// Populate projects grid
const projectsGrid = document.querySelector('.projects-grid');

function displayProjects(filter = 'all') {
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <a href="${project.link}" class="project-link"><i class="fa-solid fa-link"></i></a>
                    <a href="${project.link}" class="project-link"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

displayProjects();

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        displayProjects(filter);
    });
});

// Contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (data.name && data.email && data.subject && data.message) {
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'message sent! <i class="fa-regular fa-check"></i>';
        submitBtn.style.background = 'var(--primary)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
        }, 3000);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
    }
});

// Theme toggle (light/dark mode)
const themeToggle = document.querySelector('.theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--dark', '#f8fafc');
        document.documentElement.style.setProperty('--light', '#0f172a');
        document.documentElement.style.setProperty('--gray', '#334155');
        themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        document.documentElement.style.setProperty('--dark', '#0f172a');
        document.documentElement.style.setProperty('--light', '#f8fafc');
        document.documentElement.style.setProperty('--gray', '#64748b');
        themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
    isDark = !isDark;
});

// Smooth scroll for navigation links
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

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'progress 1.5s ease-out';
        }
    });
}, observerOptions);

skillBars.forEach(bar => observer.observe(bar));

// Parallax effect for home section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const home = document.querySelector('.home');
    const homeBg = document.querySelector('.home-background img');
    
    if (homeBg) {
        homeBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic year in footer
const footerYear = document.querySelector('.footer-bottom p:first-child');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = ` ${year} saqib manzoor dar. all rights reserved.`;
}