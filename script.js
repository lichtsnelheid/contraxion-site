const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".service-card,.case-card,.process-list div,.insight-grid a,.about-card,.cta-card")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
