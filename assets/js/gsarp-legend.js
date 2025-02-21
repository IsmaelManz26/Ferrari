document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animación para la sección de Enzo Ferrari
  gsap.fromTo(
    ".enzo-text",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".enzo-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
  gsap.fromTo(
    ".enzo-image img",
    { opacity: 0 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".enzo-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 1,
    }
  );

  // Animación para la sección de la línea del tiempo
  gsap.utils.toArray(".timeline-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.2, // Retraso para que los elementos aparezcan uno tras otro
      }
    );
  });

  // Animación para la sección de colaboraciones
  const collaborationCards = gsap.utils.toArray(".collaboration-card");
  collaborationCards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -100 : 100; // Alternar dirección
    gsap.fromTo(
      card,
      { opacity: 0, x: direction },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: Math.floor(index / 2) * 0.2,
      }
    );
  });
});
