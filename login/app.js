document.addEventListener("DOMContentLoaded", function () {
  fetch("podaci.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      users = data.users;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

const hash = (text) => {
  const hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
  hashObj.update(text);
  const hash = hashObj.getHash("HEX");
  return hash;
};

const usernameEl = document.getElementById("username");
let usernameValue = "";

const usernameValidationMessageDiv = document.getElementById(
  "usernameValidationMessage"
);

let users = [];

usernameEl.addEventListener("input", () => {
  usernameValue = usernameEl.value;
});

const passwordEl = document.getElementById("password");

let passwordValue = "";

passwordEl.addEventListener("input", () => {
  passwordValue = passwordEl.value;
});

const passwordValidationMessageDiv = document.getElementById(
  "passwordValidationMessage"
);

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  const user = users.find((user) => user.username === usernameValue);
  if (!user) {
    e.preventDefault();
    usernameValidationMessageDiv.innerText = "";
    const newh4 = document.createElement("h4");
    newh4.style.color = "red";
    newh4.style.fontSize = "16px";
    newh4.style.textAlign = "start";
    newh4.style.marginTop = "0px";
    newh4.style.position = "relative";
    newh4.style.top = "-1rem";
    newh4.innerText = `This username doesn't exists`;
    usernameValidationMessageDiv.appendChild(newh4);
  } else if (hash(passwordValue) !== user.password) {
    e.preventDefault();
    console.log(hash(passwordValue));
    usernameValidationMessageDiv.innerText = "";
    passwordValidationMessageDiv.innerText = "";
    const newh4 = document.createElement("h4");
    newh4.style.color = "red";
    newh4.style.fontSize = "16px";
    newh4.style.textAlign = "start";
    newh4.style.marginTop = "0px";
    newh4.innerText = `Invalid password`;
    passwordValidationMessageDiv.appendChild(newh4);
  } else {
    passwordValidationMessageDiv.innerText = "";
    usernameValidationMessageDiv.innerText = "";
    localStorage.setItem("loggedInUser", usernameValue);
    document.location.href = "../home page/index.html";
  }
});
