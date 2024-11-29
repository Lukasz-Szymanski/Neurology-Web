import { locations } from "../data/locations.js";

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

  // Generowanie sekcji lokalizacji z lazy loading map
  function generateLocationSections() {
    locations.forEach((location) => {
      const template = `
        <section class="text-gray-600 body-font relative section-content hidden" id="${location.id}">
          <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
            <div class="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative text-center md:block hidden" style="height: 500px;">
              <iframe
                data-src="${location.mapUrl}"
                style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                loading="lazy">
              </iframe>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 text-center">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                ${location.title}
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                ${location.hours}<br>
                ${location.address}<br>
                ${location.phone}
              </p>
            </div>
          </div>
        </section>
      `;

      document
        .querySelector("footer")
        .insertAdjacentHTML("beforebegin", template);

      const section = document.getElementById(location.id);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target.querySelector("iframe");
            if (iframe.dataset.src && !iframe.src) {
              iframe.src = iframe.dataset.src;
            }
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(section);
    });
  }

  generateLocationSections();
});
