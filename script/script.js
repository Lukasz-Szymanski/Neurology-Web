document.addEventListener("DOMContentLoaded", () => {
  // Pobierz wszystkie linki nawigacyjne i sekcje
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section-content");

  // Funkcja pokazująca wybraną sekcję i ukrywająca pozostałe
  function showSection(sectionId) {
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  }

  // Obsługa kliknięć w linki nawigacyjne
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);
      history.pushState(null, "", `#${targetId}`);
    });
  });

  // Obsługa przycisków przeglądarki (wstecz/dalej)
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1) || "Bio";
    showSection(hash);
  });

  // Pokaż odpowiednią sekcję przy pierwszym załadowaniu
  const initialSection = window.location.hash.substring(1) || "Bio";
  showSection(initialSection);
});
