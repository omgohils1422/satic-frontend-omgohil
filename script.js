// MOBILE NAV VIWE
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

// 🔔 NOTIFICATION LOGIC
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");

function showSuccess() {
  notification.className = "notification success";
  notificationText.textContent = "✅ Action completed successfully!";
  notification.style.display = "flex";
}

function showError() {
  notification.className = "notification error";
  notificationText.textContent = "❌ Something went wrong. Try again.";
  notification.style.display = "flex";
}

closeNotification.addEventListener("click", () => {
  notification.style.display = "none";
});
