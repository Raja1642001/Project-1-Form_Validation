const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// Function fro Validation:

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setError(username, "Username is required!");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Email is required!");
  } else if (!validateEmail(emailVal)) {
    setError(email, "Enter a valid email!");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password is required!");
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be atleast 8 characters");
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === "") {
    setError(cpassword, "Confirm your password!");
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Password does not match!");
  } else {
    setSuccess(cpassword);
  }

  // Check if all validations pass
  if (
    usernameVal !== "" &&
    validateEmail(emailVal) &&
    passwordVal !== "" &&
    passwordVal.length >= 8 &&
    cpasswordVal !== "" &&
    cpasswordVal === passwordVal
  ) {
    console.log("Pass");
    alert("Signed Up successfully!");
  } else {
    console.log("Failed to Sign Up!");
  }
}

// Set error Function:

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

// Set success Function:

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// Email Validation:

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
