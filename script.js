document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const menuBtn = document.getElementById("btn-menu");
  const closeBtn = document.getElementById("btn-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Botão "Voltar ao Topo"
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove("opacity-0", "invisible");
        backToTopBtn.classList.add("opacity-100", "visible");
      } else {
        backToTopBtn.classList.remove("opacity-100", "visible");
        backToTopBtn.classList.add("opacity-0", "invisible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Efeito de digitação
  const typingElement = document.getElementById("typing");
  const text = "FullStack Web";
  let index = 0;

  function type() {
    if (index <= text.length) {
      typingElement.textContent = text.slice(0, index);
      index++;
      setTimeout(type, 150);
    }
  }

  if (typingElement) {
    type();
  }

  // Animação ao scroll
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  function checkVisibility() {
    const windowBottom = window.innerHeight;

    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowBottom - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate-fadeInUp');
    observer.unobserve(entry.target); // anima uma vez
  }
  });
  }, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  el.style.opacity = '0'; // oculta antes da animação
  observer.observe(el);
});