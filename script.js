document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const themeIcon = document.getElementById("theme-icon");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      if (themeIcon) {
        themeIcon.textContent = isDark ? "☀️" : "🌙";
      }
    });
  }
});
