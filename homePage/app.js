const remove = document.getElementById("loginremove");
const carousel = document.querySelector(".carousel");
const wrapper = document.querySelector(".wrapper");
const arrowsBtns = document.querySelectorAll("body i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const welcome = document.getElementById("welcome");
const username = sessionStorage.getItem("loggedInUser");
const naslov = document.getElementById("welcomeh1");
if (username) {
  var slovo = username[0].toUpperCase();
}
const under = document.getElementById("under");
console.log(sessionStorage.getItem("loggedInUser"));
// console.log(slovo);
let isDraggins = false,
  timeoutId;
let counter = 3000;
let autoplayInterval;

const autoplay = () => {
  if (window.innerWidth < 800) return;
  else if (
    window.innerHeight + Math.round(window.scrollY) + 200 >=
    document.body.offsetHeight
  ) {
    carousel.scrollLeft += firstCardWidth;
  }
};

const startAutoplay = () => {
  autoplayInterval = setInterval(autoplay, counter);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

arrowsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    stopAutoplay();
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

// Pokreni autoplay interval
startAutoplay();
function updateNavigation() {
  if (isNaN(sessionStorage.getItem("loggedInUser"))) {
    remove.style.display = "none";
    welcome.style.display = "inline-block";
    naslov.textContent = "Welcome " + slovo + username.slice(1);
    naslov.style.width = "30rem";
    under.style.marginTop = "14rem";
  } else {
    remove.style.display = "inline-block";
    welcome.style.height = "0rem";
    welcome.style.display = "none";
    under.style.marginTop = "0";
  }
}

window.addEventListener("storage", function (event) {
  if (event.key === "loggedInUser") {
    updateNavigation();
  }
});

updateNavigation();

async function getData() {
  const response = await fetch(
    "https://66a26e5b967c89168f20125b.mockapi.io/api/horse2/horses"
  );
  const data = await response.json();
  console.log(data);
  let data1 = data[0];
  console.log(data1.results[0].img);
  let slike = document.querySelectorAll("#slika");
  let boja = document.querySelectorAll("#naslov");
  console.log(boja);
  console.log(slike[0]);
  console.log(data.length);
  for (let i = 0; i < 7; i++) {
    slike[i].src = data1.results[i].img;
    boja[i].textContent = data1.results[i].color;
  }
  console.log(slike);
}
getData();
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
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  transform;
};

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
        console.log(document.getElementById("hod"));
        document.getElementById("hod").style.position = "relative";
        document.getElementById("hod").style.left = "59%";
        document.getElementById("paragraf1").style.position = "relative";
        document.getElementById("paragraf1").style.left = "59%";
        document.getElementById("h3").style.position = "relative";
        document.getElementById("h3").style.left = "7.2%";
        document.getElementById("h11").style.position = "relative";
        document.getElementById("h11").style.left = "9.1%";
        document.getElementById("read").style.position = "relative";

        document.getElementById("read").style.left = "-69.8rem";
        document.getElementById("read").style.top = "30rem";
        console.log(document.getElementById("paragraf1"));
        element.innerHTML = element.dataset.sr.replace(/&lt;br&gt;/g, "<br>");
      } else {
        document.getElementById("hod").style.position = "relative";
        document.getElementById("hod").style.left = "61.5%";
        document.getElementById("h11").style.position = "relative";
        document.getElementById("h11").style.left = "6.8%";
        document.getElementById("read").style.position = "relative";

        document.getElementById("read").style.left = "-71.3rem";
        document.getElementById("read").style.top = "28rem";
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
