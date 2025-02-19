document.addEventListener("DOMContentLoaded", function () {
  const loaderSection = document.querySelector(".loader-section");
  loaderSection.classList.add("active");

  window.addEventListener("load", function () {
    loaderSection.classList.remove("active");
  });
});
