// Set footer year (if used)
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Active link highlight while scrolling
const links = Array.from(document.querySelectorAll('.menu a[href^="#"]'));
const sections = links
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = () => {
  const pos = window.scrollY + 120;
  let activeId = sections[0]?.id;

  for (const s of sections) {
    if (s.offsetTop <= pos) activeId = s.id;
  }
  links.forEach(a => {
    a.style.color = (a.getAttribute("href") === `#${activeId}`) ? "var(--text)" : "var(--muted)";
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
