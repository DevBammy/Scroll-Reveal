const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", revealScroll);

revealScroll();

function revealScroll() {
  const boxScroll = (window.innerHeight / 5) * 3.3;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < boxScroll) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
