// GSARP F1
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
