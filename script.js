//password strength

const Passstrenth = document.querySelector(".password-strength");
const PassInput = document.querySelector(".passInput");
const form = document.querySelector("#login-form");
const emailInput = document.querySelector(".emailInput");
const msg = document.querySelector(".msg");
const userInput = document.querySelector(".nameInput");
const userNameError = document.querySelector(".userNameError");
const emptyFieldError = document.querySelector(".emptyField-error");
const formSubmittedMsg = document.querySelector(".formSubmitted-msg");
//pass strength

PassInput.addEventListener("input", () => {
  const pass = PassInput.value;

  if (pass.length < 6) {
    Passstrenth.textContent = "Weak";
    Passstrenth.style.fontSize = "0.75rem";
    Passstrenth.style.color = "Red";
  } else if (pass.match(/[A-Z]/) && pass.match(/[0-9]/)) {
    Passstrenth.textContent = "Strong";
    Passstrenth.style.fontSize = "0.75rem";
    Passstrenth.style.color = "Green";
  } else {
    Passstrenth.textContent = "Medium";
    Passstrenth.style.fontSize = "0.75rem";
    Passstrenth.style.color = "Orange";
  }
});

//username error

userInput.addEventListener("input", () => {
  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
  const nameValue = userInput.value.trim();

  if (!usernamePattern.test(nameValue)) {
    userNameError.textContent =
      "Username should be 3-20 characters long and can only include letters, numbers, and underscores";
    userNameError.style.fontSize = "0.75rem";
    userNameError.style.color = "Red";
  } else {
    userNameError.textContent = "";
  }
});

//empty field msg

function emptyFieldMessage() {
  if (
    emailInput.value.trim() === "" ||
    PassInput.value.trim() === "" ||
    userInput.value.trim() === ""
  ) {
    emptyFieldError.textContent = "All fields are required";
    emptyFieldError.style.fontSize = "0.75rem";
    emptyFieldError.style.color = "Red";
  } else {
    emptyFieldError.textContent = "";
  }
}

//Email verification

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    msg.textContent = "Email is required!";
    msg.style.fontSize = "0.75rem";
    msg.style.color = "Red";
  } else if (!emailPattern.test(emailValue)) {
    msg.textContent = "Incorrect Format";
    msg.style.fontSize = "0.75rem";
    msg.style.color = "Red";
  } else {
    msg.textContent = "";
  }
  emptyFieldMessage();
  //
  if (
    msg.textContent === "" ||
    userNameError.textContent === "" ||
    Passstrenth.textContent !== "Weak"
  ) {
    formSubmittedMsg.textContent = "This form is submitted.";
    formSubmittedMsg.style.fontSize = "0.85rem";
    formSubmittedMsg.style.color = "Green";
    formSubmittedMsg.style.marginTop = "10px";
  }
});
