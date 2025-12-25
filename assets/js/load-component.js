document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      // Inisialisasi hamburger SETELAH navbar dimuat
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("show");
          menuToggle.innerHTML = navLinks.classList.contains("show")
            ? '<i class="ri-close-line"></i>'
            : '<i class="ri-menu-line"></i>';
        });
      }
    });
});
