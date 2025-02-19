document.addEventListener("DOMContentLoaded", function () {
  const loaderSection = document.querySelector(".loader-section");
  loaderSection.classList.add("active");

  window.addEventListener("load", function () {
    setTimeout(() => {
      loaderSection.classList.remove("active");
    }, 1000);
  });
});
