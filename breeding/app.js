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
