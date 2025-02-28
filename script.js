// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Close mobile nav when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Account for fixed header
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    if (!nameInput.value.trim()) {
      isValid = false;
      nameInput.style.borderColor = 'red';
    } else {
      nameInput.style.borderColor = '';
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      isValid = false;
      emailInput.style.borderColor = 'red';
    } else {
      emailInput.style.borderColor = '';
    }
    
    if (!messageInput.value.trim()) {
      isValid = false;
      messageInput.style.borderColor = 'red';
    } else {
      messageInput.style.borderColor = '';
    }
    
    if (isValid) {
      // In a real application, you would send the form data to a server here
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  });
}

// Email validation helper function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add scroll event for header styling
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Initialize the page with the "popular" tab active
document.querySelector('.tab-btn[data-tab="popular"]').classList.add('active');
document.getElementById('popular').classList.add('active');