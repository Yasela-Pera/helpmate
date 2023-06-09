const registerForm = document.getElementById("reg-form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const select = document.getElementById("select");
const regNo = document.getElementById("reg_no");
const regDiv = document.getElementById("reg_no_div");
const visible = document.getElementById("eye");
const invisible = document.getElementById("eye-slash");

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const blur = document.querySelector(".left-header-main");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(emailValue);
  if (checkRegisterInputs()) {
    alert("Registration Successful!");
    // window.location.href = "login.html";
    window.location.replace("login.html");
  }
});

select.addEventListener("change", function () {
  if (select.value == "lecturer") {
    regDiv.style.display = "none";
  } else {
    regDiv.style.display = "block";
  }
});

function checkRegisterInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const selectValue = select.value;
  const regNoValue = regNo.value.trim();

  let isFullNameCorrect = false;
  let isEmailCorrect = false;
  let isRegNoCorrect = false;
  let isPasswordCorrect = false;

  if (fullnameValue === "") {
    setErrorFor(fullname, "Fullname cannot be blank");
    // return false;
  } else {
    setSuccessFor(fullname);
    isFullNameCorrect = true;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    // return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid!");
    // return false;
  } else {
    setSuccessFor(email);
    isEmailCorrect = true;
  }

  if (selectValue === "") {
    setErrorFor(select, "Please select an option");
    // return false;
  } else {
    setSuccessFor(select);
  }

  if (selectValue === "student" && regNoValue === "") {
    setErrorFor(regNo, "Registration number cannot be blank");
    // return false;
  } else {
    setSuccessFor(regNo);
    isRegNoCorrect = true;
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    // return false;
  } else {
    setSuccessFor(password);
    isPasswordCorrect = true;
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  function isEmail(email) {
    var regEx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    return regEx.test(email);
  }

  if (isEmailCorrect && isFullNameCorrect && isPasswordCorrect) {
    if (selectValue === "student" && isRegNoCorrect) {
      return true;
    } else if (selectValue === "lecturer") {
      return true;
    }
  }

  return false;
}
