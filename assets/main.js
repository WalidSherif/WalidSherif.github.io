document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.getElementById("current-year");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const applyTheme = (theme) => {
    const dark = theme === "dark";
    body.classList.toggle("dark-mode", dark);
    if (themeToggle) {
      themeToggle.textContent = dark ? "Light mode" : "Dark mode";
    }
  };

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  if (filterButtons.length && cards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.filter;
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        cards.forEach((card) => {
          const category = card.dataset.category;
          const match = selected === "all" || category === selected;
          card.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  const navLinks = document.querySelectorAll(".site-nav a[href*='#']");
  const navSections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href").split("#")[1] ? `#${link.getAttribute("href").split("#")[1]}` : ""))
    .filter(Boolean);

  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 120;
    let activeId = "";
    navSections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const hash = link.getAttribute("href").split("#")[1];
      link.classList.toggle("is-active", hash === activeId);
    });
  };

  if (navSections.length) {
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();
  }
});
