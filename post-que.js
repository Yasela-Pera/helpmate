const queTextArea = document.getElementById("que-textarea");
const myErr = document.getElementById("err1");
const btn = document.getElementById("post-que-btn");
const boxx = document.getElementById("q-post");
const newque = document.getElementById("newque");
const queText = document.querySelector(".new-que")

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  
  // newque.textContent = queTextArea.value
  
  if(queTextArea.value.trim() === ''){
    myErr.style.display = 'block';
    queTextArea.style.borderColor = "red";
  }else{
    myErr.style.display = 'none';
    queTextArea.style.borderColor = "";
    boxx.style.display = 'block';
    queText.innerHTML = queTextArea.value
  }

  // if(boxx.style.display ==='none'){
  //   // boxx.style.display = 'block'
  //   boxx.classList.remove("q-post")
  // }else{
  //   boxx.style.display = 'none'
  // }

});
