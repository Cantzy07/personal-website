const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes   = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 1) deactivate all
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
  
        // 2) activate clicked button
        btn.classList.add('active');
        // 3) activate the matching pane
        const pane = document.getElementById(btn.dataset.tab);
        pane.classList.add('active');
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const quoteSection = document.querySelector('.quote-section');

    if (!quoteSection) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
        }
        });
    }, {
        root: null,           // viewport
        threshold: 0.1        // fire when 10% of the section is visible
    });

    observer.observe(quoteSection);
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const threshold = 50; // px scrolled before background appears

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});