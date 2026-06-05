document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar blur and Scroll Progress on scroll
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        // Navbar
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Scroll progress
        if (scrollProgress) {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${(totalScroll / windowHeight) * 100}%`;
            scrollProgress.style.width = scroll;
        }
    });

    // Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -20px 0px" };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Image Lightbox Logic
    const imageItems = document.querySelectorAll('.gallery-item');
    const imageLightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    // Filtering items with valid images (ignoring empty src)
    const validImageItems = Array.from(imageItems).filter(item => {
        const img = item.querySelector('img');
        return img && img.getAttribute('src') !== "";
    });
    const imagesSrc = validImageItems.map(item => item.querySelector('img').src);

    function updateLightboxImage(index) {
        if(imagesSrc.length === 0) return;
        currentImageIndex = index;
        lightboxImg.src = imagesSrc[index];
    }

    validImageItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateLightboxImage(index);
            imageLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if(lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            imageLightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if(imageLightbox) {
        imageLightbox.addEventListener('click', (e) => {
            if (e.target === imageLightbox || e.target === document.querySelector('.lightbox-content-wrapper')) {
                imageLightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(imagesSrc.length === 0) return;
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) newIndex = imagesSrc.length - 1;
            updateLightboxImage(newIndex);
        });
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(imagesSrc.length === 0) return;
            let newIndex = currentImageIndex + 1;
            if (newIndex >= imagesSrc.length) newIndex = 0;
            updateLightboxImage(newIndex);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!imageLightbox || !imageLightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            imageLightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Contact Form Toast Notification
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Show toast
            toast.classList.add('show');
            
            // Clear form
            contactForm.reset();
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }

    // Canvas Honeycomb Background Animation
    const canvas = document.getElementById('honeycomb-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initHexagons();
        });

        const hexSize = 35; // Radius of hexagon
        const hexWidth = Math.sqrt(3) * hexSize;
        const hexHeight = 2 * hexSize;
        const xOffset = hexWidth;
        const yOffset = hexHeight * 0.75;
        
        let hexagons = [];

        function initHexagons() {
            hexagons = [];
            const cols = Math.ceil(width / xOffset) + 1;
            const rows = Math.ceil(height / yOffset) + 1;
            
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * xOffset + (row % 2 === 1 ? xOffset / 2 : 0);
                    const y = row * yOffset;
                    hexagons.push({
                        x, y,
                        opacity: 0,
                        targetOpacity: 0,
                        speed: Math.random() * 0.002 + 0.001 // Very slow breathing
                    });
                }
            }
        }

        function drawHexagon(x, y, opacity) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 180) * (60 * i - 30);
                const hx = x + hexSize * Math.cos(angle);
                const hy = y + hexSize * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            
            // Draw thin outline
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Fill with animated gold glow
            if(opacity > 0) {
                // Gold fill #C9A84C mapped to RGB (201, 168, 76)
                ctx.fillStyle = `rgba(201, 168, 76, ${opacity})`;
                ctx.fill();
            }
        }

        function animateHexagons() {
            ctx.clearRect(0, 0, width, height);
            
            // Randomly pick cells to start glowing if they aren't already
            if(Math.random() < 0.15) { // Slow random trigger rate
                const target = hexagons[Math.floor(Math.random() * hexagons.length)];
                if(target.targetOpacity === 0) {
                    target.targetOpacity = Math.random() * 0.12 + 0.03; // max 15% opacity
                }
            }

            hexagons.forEach(hex => {
                // Smooth interpolation towards target opacity
                if(Math.abs(hex.opacity - hex.targetOpacity) > 0.005) {
                    hex.opacity += (hex.targetOpacity > hex.opacity) ? hex.speed : -hex.speed;
                } else if (hex.targetOpacity > 0) {
                    // Once it hits peak glow, set target back to 0 to fade out
                    hex.targetOpacity = 0;
                }
                
                // Draw only if it's on screen
                if(hex.x > -hexSize && hex.x < width + hexSize && hex.y > -hexSize && hex.y < height + hexSize) {
                    drawHexagon(hex.x, hex.y, hex.opacity);
                }
            });

            requestAnimationFrame(animateHexagons);
        }

        initHexagons();
        animateHexagons();
    }
});

// Premium Additions: Page Loader & Number Counters
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        if(!target) return;
        const suffix = stat.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        let curr = 0;
        const timer = setInterval(() => {
            const increment = target / (duration / 20); // 20ms frame
            curr += increment;
            if (curr >= target) {
                stat.innerText = target + suffix;
                clearInterval(timer);
            } else {
                stat.innerText = Math.floor(curr) + suffix;
            }
        }, 20);
    });
}

let isLoaderHidden = false;

// Hide loader after 3 seconds guaranteed
window.addEventListener('load', function() {
  setTimeout(hideLoader, 2500);
});

// Backup — force hide after 4 seconds
setTimeout(hideLoader, 4000);
// LOADER FIX — guaranteed hide
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.6s ease';
    setTimeout(function() {
      loader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 600);
  }
}

// Hide on page load
window.addEventListener('load', function() {
  setTimeout(hideLoader, 2000);
});

// Force hide after 3 seconds NO MATTER WHAT
setTimeout(hideLoader, 3000);

