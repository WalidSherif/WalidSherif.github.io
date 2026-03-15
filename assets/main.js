document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  }

  applyTheme(savedTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const group = card.dataset.group;
        const show = filter === "all" || group === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
});
