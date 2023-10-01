"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonShowModal = document.querySelectorAll(".show-modal");
const buttonCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
