// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (you'll need to update these values)
    emailjs.init('YOUR_PUBLIC_KEY');
    
    // Theme switching functionality
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition effect
        html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Remove transition after animation completes
        setTimeout(() => {
            html.style.transition = '';
        }, 300);
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Animated counter for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = counter.textContent; // Reset to original
                }
            };
            
            // Start animation when element is visible
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        counterObserver.unobserve(entry.target);
                    }
                });
            });
            
            counterObserver.observe(counter.closest('.stat-card'));
        });
    };

    // Initialize counter animation
    animateCounters();

    // Navigation dots functionality
    const dots = document.querySelectorAll('.hero-dots .dot');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active dot based on scroll position
    const updateActiveDot = () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all dots
                dots.forEach(dot => dot.classList.remove('active'));
                // Add active class to corresponding dot
                if (dots[index]) {
                    dots[index].classList.add('active');
                }
            }
        });
    };
    
    // Add click functionality to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetSection = sections[index];
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update dots on scroll
    window.addEventListener('scroll', updateActiveDot);

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            // Clear existing content safely
        submitBtn.textContent = '';
        
        // Create loading span element
        const loadingSpan = document.createElement('span');
        loadingSpan.className = 'loading';
        loadingSpan.textContent = 'Sending...';
        
        // Append safely
        submitBtn.appendChild(loadingSpan);
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // EmailJS configuration (you'll need to update these values)
            const templateParams = {
                from_name: formObject.name,
                from_email: formObject.email,
                subject: formObject.subject,
                message: formObject.message,
                to_email: 'ravi.ramsoni01@gmail.com' // Your email address
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Success state
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = '#10b981';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                    
                    // Show success message
                    showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    
                    // Show error message
                    showNotification('Failed to send message. Please try again or email me directly at ravi.ramsoni01@gmail.com', 'error');
                });
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        // Clear existing content safely
        notification.textContent = '';
        
        // Create notification content safely
        const notificationContent = document.createElement('div');
        notificationContent.className = 'notification-content';
        
        const messageSpan = document.createElement('span');
        messageSpan.textContent = message;
        
        const closeButton = document.createElement('button');
        closeButton.className = 'notification-close';
        closeButton.textContent = '×';
        
        // Append safely
        notificationContent.appendChild(messageSpan);
        notificationContent.appendChild(closeButton);
        notification.appendChild(notificationContent);
        
        // Add notification styles
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            .notification.success {
                border-left: 4px solid #10b981;
            }
            .notification.error {
                border-left: 4px solid #ef4444;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
        `;
        
        if (!document.querySelector('#notification-styles')) {
            style.id = 'notification-styles';
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add floating animation to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const animationDelay = index * 2;
        particle.style.animationDelay = `${animationDelay}s`;
        
        // Random position adjustment
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click handlers for certification cards (replacing inline onclick)
    const certificationCards = document.querySelectorAll('.certification-card[data-certification-url]');
    certificationCards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-certification-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightNavLink = () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavLink);

    // Add CSS for active nav link
    const activeNavStyle = document.createElement('style');
    activeNavStyle.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(activeNavStyle);

    // Lazy loading for project images (if you add real images later)
    const observeImages = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observeImages.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        observeImages.observe(img);
    });

    // Add loading screen (optional)
    window.addEventListener('load', () => {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    const throttledScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Scroll-dependent functions here
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', throttledScroll);
    
    // Portfolio website loaded successfully! 🚀
});