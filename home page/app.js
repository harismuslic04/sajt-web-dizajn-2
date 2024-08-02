const remove = document.getElementById("loginremove");
const carousel = document.querySelector(".carousel");
const wrapper = document.querySelector(".wrapper");
const arrowsBtns = document.querySelectorAll("body i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDraggins = false,
  timeoutId;
let counter = 3000;
let autoplayInterval;

const autoplay = () => {
  if (window.innerWidth < 800) return;
  carousel.scrollLeft += firstCardWidth;
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
  if (sessionStorage.getItem("loggedInUser")) {
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
