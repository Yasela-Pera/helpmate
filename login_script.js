const loginForm = document.getElementById("log-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();



  if (checkLoginInputs()) {
    if (
      email.value === "info@helpmate-lec.com" &&
      password.value === "admin-lecturer"
    ) {
      window.location.replace("que-ans.html");
    } else if (
      email.value === "info@helpmate-std.com" &&
      password.value === "admin-student"
    ) {
      window.location.replace("post_que.html");
    }else{
      alert("Invalid Credentials! emial and password does not match!");
    }
  }
});

// select.addEventListener('change',function(){
//     if(select.value == 'lecturer'){
//         regDiv.style.display  = 'none';
//     }else{
//         regDiv.style.display  = 'block';
//     }
// })

function checkLoginInputs() {
  //get values from inputs
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid!");
    return false;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    return false;
  } else {
    setSuccessFor(password);
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
  return true;
}
