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
// Event listener za provjeru forme kada se klikne na gumb
