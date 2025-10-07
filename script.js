// script.js

// =======================
// 1. Responsive Mobile Menu Toggle
// =======================
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// =======================
// 2. Newsletter Form Validation
// =======================
const form = document.querySelector('.news-form');
const emailInput = document.querySelector('.news-email');

form.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();

  if (!emailValue || !emailValue.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address.');
    emailInput.focus();
  } else {
    alert('Thank you for subscribing!');
  }
});


// =======================
// 3. Dark Mode Toggle with localStorage
// =======================
// Add this button to your HTML somewhere (e.g., in the header):
// <button id="dark-mode-toggle">🌙</button>

// const toggleBtn = document.createElement('button');
// toggleBtn.id = 'dark-mode-toggle';
// toggleBtn.innerText = '🌙';
// document.querySelector('.header-content').appendChild(toggleBtn);

// const enableDarkMode = () => {
//   document.body.classList.add('dark-mode');
//   localStorage.setItem('darkMode', 'enabled');
// };

// const disableDarkMode = () => {
//   document.body.classList.remove('dark-mode');
//   localStorage.setItem('darkMode', 'disabled');
// };

// // On load
// if (localStorage.getItem('darkMode') === 'enabled') {
//   enableDarkMode();
// }

toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
    toggleBtn.innerText = '🌙';
  } else {
    enableDarkMode();
    toggleBtn.innerText = '☀️';
  }
});


// =======================
// 4. Scroll Reveal Animations (Intersection Observer)
// =======================
const revealElements = document.querySelectorAll('.feature-card, .testimonial-card, .company-logo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => {
  el.classList.add('reveal-hidden');
  observer.observe(el);
});





// //for api integration
// const testimonialSection = document.getElementById('testimonial-section');

// async function loadTestimonials() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     // Clear previous content
//     testimonialSection.innerHTML = "";

//     data.forEach(user => {
//       const testimonialCard = document.createElement('div');
//       testimonialCard.className = 'testimonial-card';
//       testimonialCard.innerHTML = `
//         <div class="testimonial-avatar">
//           <img src="https://i.pravatar.cc/150?u=${user.id}" alt="User Avatar" />
//         </div>
//         <p class="testimonial-text">"${user.company.catchPhrase}"</p>
//         <div>
//           <h3 class="testimonial-name">${user.name}</h3>
//           <p class="testimonial-desc">${user.company.name}</p>
//         </div>
//       `;
//       testimonialSection.appendChild(testimonialCard);
//     });

//   } catch (error) {
//     console.error('Error loading testimonials:', error);
//     testimonialSection.innerHTML = "<p>Failed to load testimonials.</p>";
//   }
// }

// loadTestimonials(); // Call on page load
