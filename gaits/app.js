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
