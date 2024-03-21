const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const popupMenu = document.querySelector(".popup-menu");

menuBtn.addEventListener("click", (e) => {
  popupMenu.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
  popupMenu.classList.remove("show");
});

const faqButtons = document.querySelectorAll(".faq-btn");
const faqBodys = document.querySelectorAll(".faq-body");

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", () => {
    faqBodys[i].classList.toggle("showFaq");
    faqButtons[i].classList.toggle("showBtn");
  });
}
