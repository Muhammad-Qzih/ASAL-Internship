const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
