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

// SEARCH BAR LOGIC
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = searchInput.value.trim();

  if (value === "") {
    alert("Please enter a search term");
    searchInput.focus();
    return;
  }

  alert("Searching for: " + value);
});
