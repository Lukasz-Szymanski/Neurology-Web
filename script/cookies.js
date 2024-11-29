const cookieNotice = document.getElementById("cookie-notice");

function showCookieNotice() {
  cookieNotice.classList.remove("invisible", "opacity-0");
}

function hideCookieNotice() {
  cookieNotice.classList.add("invisible", "opacity-0");
}

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  hideCookieNotice();
  // Inicjalizuj GA po akceptacji
  gtag("js", new Date());
  gtag("config", "G-J0JMCFSBW1");
}

function rejectCookies() {
  localStorage.setItem("cookiesRejected", "true");
  hideCookieNotice();
}

// Sprawdź status zgody przy ładowaniu strony
window.addEventListener("DOMContentLoaded", () => {
  if (
    !localStorage.getItem("cookiesAccepted") &&
    !localStorage.getItem("cookiesRejected")
  ) {
    showCookieNotice();
  }
});
