import "./styles/main.css";

const boxes = document.querySelectorAll(".box");
console.log(boxes);

window.addEventListener("scroll", animateBoxes);

function animateBoxes() {
  const innerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < innerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
