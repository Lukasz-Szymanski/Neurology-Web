document.addEventListener("DOMContentLoaded", () => {
  const showSection = (sectionId) => {
    document.querySelectorAll(".section-content").forEach((section) => {
      section.classList.toggle("hidden", section.id !== sectionId);
    });
  };

  // Pokaż Main na starcie
  showSection("Main");

  // Obsługa nawigacji i logo
  document.querySelectorAll('nav a, a[href="Main"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = e.target.getAttribute("href").replace("#", "");
      showSection(sectionId);
      history.pushState(null, "", `#${sectionId}`);
    });
  });

  // Obsługa przycisków wstecz/naprzód
  window.addEventListener("popstate", () =>
    showSection(window.location.hash.slice(1) || "Main")
  );
});
