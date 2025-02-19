// BOTON DE SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const arrowIcon = scrollButton.querySelector("i");

  scrollButton.addEventListener("click", function () {
    if (window.scrollY === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight / 2) {
      arrowIcon.classList.remove("fa-arrow-down");
      arrowIcon.classList.add("fa-arrow-up");
    } else {
      arrowIcon.classList.remove("fa-arrow-up");
      arrowIcon.classList.add("fa-arrow-down");
    }
  });
});

// NAV HASTA LOS 60VH
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * 0.6) {
      header.style.backgroundColor = "var(--ferrari-black)";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
});

// CTA DEL NAV ACTIVO
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href)) {
      link.classList.add("active");
    }
  });

  // Si no estamos en ninguna de las páginas específicas, marcar "Home"
  const activeLink = document.querySelector(".nav-link.active");
  if (!activeLink) {
    document
      .querySelector('.nav-link[href="index.html"]')
      .classList.add("active");
  }
});

// MENÚ DE HAMBURGUESA
document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".nav-bar");
  const menuOn = document.querySelector(".menu-on");
  const header = document.querySelector("header");

  if (navBar) {
    navBar.addEventListener("click", function () {
      navBar.classList.toggle("open");
      menuOn.classList.toggle("menu-mobile");
      header.classList.toggle("menu-open");
    });
  }
});
