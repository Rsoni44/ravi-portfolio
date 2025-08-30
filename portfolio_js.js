// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (Follow EMAILJS_SETUP_GUIDE.md for setup)
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    // emailjs.init('your_actual_public_key_here');
    
    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
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

    // Navbar scroll effect + Progress bar + Back to top
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / docHeight) * 100;
        
        // Update scroll progress bar
        document.getElementById('scrollProgress').style.width = scrollProgress + '%';
        
        // Navbar scroll effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top click functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
            
            // Send email using EmailJS (Follow EMAILJS_SETUP_GUIDE.md for setup)
            // emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
            
            // Temporary success simulation (replace with actual EmailJS code)
            setTimeout(() => {
                // Simulated response
                    console.log('Form submitted successfully (simulated)');
                    
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
            }, 1500); // End simulation
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

    
    // Portfolio website loaded successfully! 🚀
});