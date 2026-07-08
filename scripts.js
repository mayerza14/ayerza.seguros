// ─── MENÚ MOBILE ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ─── ANIMACIÓN FADE-IN AL HACER SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio-card, .porq-item, .espec-item, .test-card, .logo-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// ─── CARRUSELES CON SCROLL HORIZONTAL (fade + flechas) ───
document.querySelectorAll('.scroll-carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.scroll-track');
  const btnLeft = wrapper.querySelector('.scroll-arrow-left');
  const btnRight = wrapper.querySelector('.scroll-arrow-right');
  if (!track) return;

  function updateArrows() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    wrapper.classList.toggle('can-scroll-left', track.scrollLeft > 4);
    wrapper.classList.toggle('can-scroll-right', track.scrollLeft < maxScroll - 4);
  }

  btnLeft.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
  });
  btnRight.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
});
