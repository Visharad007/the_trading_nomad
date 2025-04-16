<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
 
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize particles background
      if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#6c5ce7" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#6c5ce7",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        });
      }

      // Handle contact form submission
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // In a real application, you would send the form data to your server here
          console.log('Form submitted:', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
          });
          
          // Show success message
          document.getElementById('successMessage').style.display = 'block';
          
          // Reset form
          contactForm.reset();
          
          // Hide form and show success message
          contactForm.style.display = 'none';
        });
      }

      // Mobile menu toggle (same as plans page)
      const menuBtn = document.querySelector('.mobile-menu-btn');
      if (menuBtn) {
        menuBtn.addEventListener('click', function() {
          // You would implement mobile menu toggle here
          console.log('Mobile menu button clicked');
        });
      }

      // Scroll effect for navigation
      window.addEventListener('scroll', function() {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      });
    });
 