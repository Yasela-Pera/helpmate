for (let i = 1; i <= 4; i++) {
  const postAnswerBtn = document.getElementById(`post-answer-btn${i}`);
  const answerTextarea = document.getElementById(`answer-textarea${i}`);
  const answerParagraph = document.getElementById(`ans${i}`);
  const myErr = document.getElementById(`err${i}`);

  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  postAnswerBtn.addEventListener("click", (event) => {
    event.preventDefault(); // stop the default action

    if (answerTextarea.value.trim() === "") {
      myErr.style.display = "block";
      answerTextarea.style.borderColor = "red";
    } else {
      myErr.style.display = "none";
      answerTextarea.style.borderColor = "";
      const answerText = answerTextarea.value;
      const newAnswer = document.createElement("p"); // create new paragraph element
      newAnswer.textContent = "●" + " " + answerText; // set text content of new paragraph element
      answerParagraph.appendChild(newAnswer); // append new paragraph element to answerParagraph
      answerTextarea.value = "";
    }
  });
}
