document.querySelector(".primary-btn").innerText = "Send";

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Disable background scroll
  document.body.style.overflow =
    navLinks.classList.contains("show") ? "hidden" : "auto";
});

// Close menu on link click
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});
