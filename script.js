// MOBILE NAV
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  document.body.style.overflow =
    navLinks.classList.contains("show") ? "hidden" : "auto";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});

// SEARCH BAR FUNCTIONALITY
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: "${query}"`); // Demo: Replace with real search logic
    searchInput.value = ""; // Clear input
  } else {
    alert("Please enter a search term.");
  }
});

// 🔔 NOTIFICATION LOGIC
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");

function showSuccess() {
  notification.className = "notification success";
  notificationText.textContent = "✅ Action completed successfully!";
  notification.style.display = "flex";
  // Auto-hide after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function showError() {
  notification.className = "notification error";
  notificationText.textContent = "❌ Something went wrong. Try again.";
  notification.style.display = "flex";
  // Auto-hide after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

closeNotification.addEventListener("click", () => {
  notification.style.display = "none";
});