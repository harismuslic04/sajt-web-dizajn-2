document.getElementById("btn").addEventListener("click", () => {
  validateForm();
});

function validateForm() {
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const fullNamePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^.+@.+\.[a-zA-Z]{2,4}$/;

  const fullNameValid = fullNamePattern.test(fullName);
  const emailValid = emailPattern.test(email);
  const messageValid = message !== "";

  document.getElementById("fullNameError").textContent = fullNameValid
    ? ""
    : "You can't enter speacial characters";
  document.getElementById("emailError").textContent = emailValid
    ? ""
    : "Please enter a valid email";
  document.getElementById("messageError").textContent = messageValid
    ? ""
    : "Please enter a message";

  if (fullNameValid && emailValid && messageValid) {
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    Toastify({
      text: "Message sent successfully",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#12b7d4",
    }).showToast();
  }

  return fullNameValid && emailValid && messageValid;
}

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
        document.getElementById("fullname1").placeholder = "Ime";

        document.getElementById("email").placeholder = "Email";
        document.getElementById("message").placeholder = "Poruka";
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
