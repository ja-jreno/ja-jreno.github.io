document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  } else {
    console.warn('Menu elements not found');
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if it's open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      } else {
        console.warn('Target scroll element not found');
      }
    });
  });

  // Form submission handling with email client
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    console.warn('Contact form not found');
  } else {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, and Message)');
        return;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
      }

      // Create email content
      const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      const mailtoLink = `mailto:info@esconstruction.com?subject=New Contact Form Submission&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form
      contactForm.reset();
    });
  }
});
