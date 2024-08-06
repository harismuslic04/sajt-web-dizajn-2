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
