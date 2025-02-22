// GSARP FOOTER
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animación para la sección del footer
  gsap.fromTo(
    "footer",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 95%",
        toggleActions: "play none none none",
      },
    }
  );

  // Animación para los elementos dentro del footer
  gsap.utils.toArray("footer > *").forEach((item, index) => {
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
          start: "top 100%",
          toggleActions: "play none none none",
        },
        delay: index * 0.2,
      }
    );
  });
});
