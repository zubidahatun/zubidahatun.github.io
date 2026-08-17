const form = document.getElementById("viewerForm");
const username = document.getElementById("username");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.igvioToast);
  window.igvioToast = setTimeout(() => toast.classList.remove("show"), 3200);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = username.value.trim().replace(/^@+/, "");

  if (!value) {
    showToast("Please enter an Instagram username.");
    username.focus();
    return;
  }

  if (!/^[A-Za-z0-9._]{1,30}$/.test(value)) {
    showToast("Please enter a valid Instagram username.");
    username.focus();
    return;
  }

  // Front-end demo: connect this handler to your real profile-search endpoint.
  showToast(`Searching for @${value}...`);
});

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
