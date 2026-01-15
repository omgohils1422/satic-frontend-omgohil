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
  alert(`Searching for ${searchInput.value}`);
  searchInput.value = "";
});

// NOTIFICATION
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");

function showSuccess() {
  notification.className = "notification success";
  notificationText.textContent = "✅ Success!";
  notification.style.display = "flex";
  setTimeout(() => notification.style.display = "none", 3000);
}

function showError() {
  notification.className = "notification error";
  notificationText.textContent = "❌ Error!";
  notification.style.display = "flex";
  setTimeout(() => notification.style.display = "none", 3000);
}

closeNotification.onclick = () => notification.style.display = "none";

// FORM
const form = document.getElementById("basicForm");
const username = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
const error = document.getElementById("nameError");

username.addEventListener("input", () => {
  const valid = username.value.trim() !== "";
  submitBtn.disabled = !valid;
  error.style.display = valid ? "none" : "block";
  username.classList.toggle("error", !valid);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!username.value.trim()) return;
  showSuccess();
  form.reset();
  submitBtn.disabled = true;
});