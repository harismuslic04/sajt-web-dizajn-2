let mysBtn = document.getElementById("ikonica");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mysBtn.style.display = "block";
  } else {
    mysBtn.style.display = "none";
  }
});

mysBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const remove = document.getElementById("loginremove");
function updateNavigation() {
  if (isNaN(sessionStorage.getItem("loggedInUser"))) {
    remove.style.display = "none";
  } else {
    remove.style.display = "inline-block";
  }
}

window.addEventListener("storage", function (event) {
  if (event.key === "loggedInUser") {
    updateNavigation();
  }
});

updateNavigation();
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("language-toggle");
  const elements = document.querySelectorAll("[data-en], [data-sr]");

  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    toggle.checked = storedLanguage === "sr";
    setLanguage();
  }

  function setLanguage() {
    elements.forEach((element) => {
      if (toggle.checked) {
        element.innerHTML = element.dataset.sr.replace(/&lt;br&gt;/g, "<br>");
      } else {
        element.innerHTML = element.dataset.en.replace(/&lt;br&gt;/g, "<br>");
      }
    });

    // Store language preference in localStorage
    const languagePreference = toggle.checked ? "sr" : "en";
    localStorage.setItem("language", languagePreference);
  }

  // Add event listener to language toggle
  toggle.addEventListener("change", setLanguage);
});
