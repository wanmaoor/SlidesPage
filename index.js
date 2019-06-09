const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const autoSlide = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  // 删除当前元素的current类
  current.classList.remove("current");
  if (current.nextElementSibling) {
    // 将current类添加到下一个兄弟元素
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  // 删除当前元素的current类
  current.classList.remove("current");
  if (current.previousElementSibling) {
    // 将current类添加到上一个兄弟元素
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

// button events
next.addEventListener("click", e => {
  nextSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", prevSlide);
if (autoSlide) {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}