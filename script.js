// MOBILE NAV
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  document.body.style.overflow =
    navLinks.classList.contains("show") ? "hidden" : "auto";
});

// CLOSE ON LINK CLICK
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});

// SEARCH BAR
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const value = searchInput.value.trim();

  if (!value) {
    alert("Please enter a search term");
    return;
  }

  alert("Searching for: " + value);
});
