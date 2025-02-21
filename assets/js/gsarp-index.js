// GSARP INDEX
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animación para la sección de Introducción Ferrari
  gsap.fromTo(
    ".intro-content",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-content",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".intro-img-1",
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".intro-img-1",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.5,
    }
  );

  gsap.fromTo(
    ".intro-img-2",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-img-2",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      delay: 1,
    }
  );

  gsap.utils.toArray(".masonry-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50, visibility: "visible" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Animación para las noticias
  gsap.utils.toArray(".news-item").forEach((item, index) => {
    const image = item.querySelector(".news-image");
    const content = item.querySelector(".news-content");

    // Animación para la imagen
    gsap.fromTo(
      image,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    // Animación para el contenido
    gsap.fromTo(
      content,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2 + 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
  // Animación para la sección de Innovación y Rendimiento
  gsap.utils.toArray(".performance-row").forEach((row, index) => {
    const text = row.querySelector(".performance-text");
    const image = row.querySelector(".performance-image");

    if (row.classList.contains("reverse")) {
      // Animación para el texto en elementos con clase "reverse"
      gsap.fromTo(
        text,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      // Animación para la imagen en elementos con clase "reverse"
      gsap.fromTo(
        image,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.5,
        }
      );
    } else {
      // Animación para el texto en elementos normales
      gsap.fromTo(
        text,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      // Animación para la imagen en elementos normales
      gsap.fromTo(
        image,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.5,
        }
      );
    }
  });
});
