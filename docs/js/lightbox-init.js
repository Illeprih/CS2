window.addEventListener("load", () => {
  document.querySelectorAll(".glightbox").forEach((el, i) => {
    if (!el.dataset.gallery) {
      el.dataset.gallery = `standalone-${i}`;
    }
  });

  GLightbox({
    selector: ".glightbox",
  });
});
