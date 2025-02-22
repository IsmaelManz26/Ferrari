document.addEventListener("DOMContentLoaded", function () {
  const historyBlocks = document.querySelectorAll(".history-block");

  function checkVisibility() {
    historyBlocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        block.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
// GSARP F1
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animación para los elementos de la sección de historia F1
  gsap.utils
    .toArray(".f1-history-section .history-block")
    .forEach((block, index) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

  // Animación para los elementos de la sección de coches icónicos F1
  gsap.utils
    .toArray(".f1-iconic-cars-section .car-item")
    .forEach((car, index) => {
      gsap.fromTo(
        car,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: car,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

  // Animación para los elementos de la sección de pilotos F1
  gsap.utils
    .toArray(".f1-pilots-section .pilot-item")
    .forEach((pilot, index) => {
      gsap.fromTo(
        pilot,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pilot,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

  // Animación para los elementos de la sección de títulos F1
  gsap.utils
    .toArray(".f1-titles-section .title-item")
    .forEach((title, index) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

  // Animación para los elementos de la galería F1
  gsap.utils.toArray(".f1-gallery .gallery-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.2,
      }
    );
  });
});
