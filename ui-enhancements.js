// ===== UI ENHANCEMENTS =====
// This file contains modern UI enhancements for the F1 website

document.addEventListener('DOMContentLoaded', function() {
    // ===== SMOOTH SCROLLING =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('header');
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.race-card, .driver-card, .product-card, .category-card, .team-card, .section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== ENHANCED HOVER EFFECTS =====
    const cards = document.querySelectorAll('.race-card, .driver-card, .product-card, .category-card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== LOADING ANIMATIONS =====
    const loadingElements = document.querySelectorAll('#races-list, .driver-list, .category-grid, .team-list');
    loadingElements.forEach(element => {
        if (element.textContent.includes('Loading')) {
            element.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Loading content...</p>
                </div>
            `;
        }
    });

    // ===== TOAST NOTIFICATIONS ENHANCEMENT =====
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = `toast show ${type}`;
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // ===== PARALLAX EFFECT FOR HERO SECTIONS =====
    const heroSections = document.querySelectorAll('.hero, .hero-center');
    heroSections.forEach(hero => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    });

    // ===== MODAL SCROLL PREVENTION =====
    function preventBodyScroll() {
        document.body.classList.add('modal-open');
    }

    function allowBodyScroll() {
        document.body.classList.remove('modal-open');
    }

    // ===== ENHANCED MODAL FUNCTIONALITY =====
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.opacity = '0';
                allowBodyScroll();
                setTimeout(() => {
                    this.style.display = 'none';
                }, 300);
            }
        });
        
        // Show modal
        modal.addEventListener('show', function() {
            preventBodyScroll();
        });
        
        // Hide modal
        modal.addEventListener('hide', function() {
            allowBodyScroll();
        });
    });

    // ===== SEARCH FUNCTIONALITY (if needed) =====
    const searchInputs = document.querySelectorAll('input[type="search"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll('.race-card, .driver-card, .product-card, .team-card');
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="block"], .modal[style*="flex"]');
            openModals.forEach(modal => {
                modal.style.display = 'none';
                allowBodyScroll();
            });
        }
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== ACCESSIBILITY IMPROVEMENTS =====
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #e10600';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // ===== CONSOLE WELCOME MESSAGE =====
    console.log('%c�� Welcome to F1 Website! 🏁', 'color: #e10600; font-size: 20px; font-weight: bold;');
    console.log('%cUI enhancements loaded successfully!', 'color: #00ff00; font-size: 14px;');
});

// ===== CSS FOR LOADING SPINNER =====
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        color: var(--text-secondary);
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--border-color);
        border-top: 4px solid var(--primary-red);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .toast.error {
        background: linear-gradient(135deg, #dc3545, #c82333);
    }
    
    .toast.warning {
        background: linear-gradient(135deg, #ffc107, #e0a800);
    }
    
    .toast.info {
        background: linear-gradient(135deg, #17a2b8, #138496);
    }
`;
document.head.appendChild(style);