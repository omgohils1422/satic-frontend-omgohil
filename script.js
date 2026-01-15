// NAV
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// SEARCH
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!searchInput.value.trim()) {
    alert("Enter search term");
    return;
  }
  alert(`Searching for: ${searchInput.value}`);
  searchInput.value = "";
});

// NOTIFICATION
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");

function showSuccess() {
  notification.classList.remove("error");
  notification.classList.add("success");
  notificationText.textContent = "✅ Action completed successfully!";
  notification.style.display = "flex";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function showError() {
  notification.classList.remove("success");
  notification.classList.add("error");
  notificationText.textContent = "❌ Something went wrong!";
  notification.style.display = "flex";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

closeNotification.addEventListener("click", () => {
  notification.style.display = "none";
});

// BUTTON DEMO
document.getElementById("successBtn").onclick = showSuccess;
document.getElementById("errorBtn").onclick = showError;

// FORM
const form = document.getElementById("basicForm");
const username = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
const errorText = document.getElementById("nameError");

username.addEventListener("input", () => {
  const valid = username.value.trim() !== "";
  submitBtn.disabled = !valid;
  errorText.style.display = valid ? "none" : "block";
  username.classList.toggle("error", !valid);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!username.value.trim()) return;
  showSuccess();
  form.reset();
  submitBtn.disabled = true;
});