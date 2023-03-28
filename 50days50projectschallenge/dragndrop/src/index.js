import "./styles/main.css";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart(e) {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(e) {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
