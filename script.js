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

// intersection observer
const observerIntro = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visibleSec");
      }
    });
  },
  {
    threshold: [0.2, 0.21, 0.22, 0.23, 0.24, 0.25],
  }
);

const intro = document.querySelector(".intro");
observerIntro.observe(intro);

const observerDesc = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visibleDesc");
      }
    });
  },
  {
    threshold: [0.05, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25],
  }
);

const descs = document.querySelectorAll(
  ".introduction-description-secondary p"
);
descs.forEach((desc) => observerDesc.observe(desc));

const observerA = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visibleA");
      }
    });
  },
  {
    threshold: [0.2, 0.21, 0.22, 0.23, 0.24, 0.25],
  }
);

const links = document.querySelectorAll(".explore-links-div a");
links.forEach((link) => observerA.observe(link));

const imgs = document.querySelectorAll(".gallery-div img");
imgs.forEach((img) => observerA.observe(img));

const observerOrder = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visibleA");
      }
    });
  }
  // {
  //   threshold: 0,
  // }
);

const infoDiv = document.querySelector(".info-div");
observerOrder.observe(infoDiv);

// faq

const observerFaq = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("visibleFaq");
        console.log(entry);
      }
    });
  },
  {
    threshold: [0.1, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25],
  }
);

const questions = document.querySelectorAll(".faq");
questions.forEach((qst) => observerFaq.observe(qst));
