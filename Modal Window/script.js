'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const bttnCloseModal = document.querySelector(`.close-modal`);
const bttnOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closemodal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < bttnOpenModal.length; i++)
  bttnOpenModal[i].addEventListener(`click`, openModal);

bttnCloseModal.addEventListener(`click`, closemodal);
overlay.addEventListener(`click`, closemodal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closemodal();
  }
});
