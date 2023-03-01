const btn = document.getElementsByClassName("btn");
const content = document.getElementsByClassName("category-content");

for (let i = 0; i < btn.length; i++) {
  console.log(btn[i]);
  btn[i].addEventListener("click", toggleItem, false);

  function toggleItem() {
    let itemClass = content[i].className;
    if (itemClass === "category-content close-item") {
      content[i].classList.remove("close-item");
      content[i].classList.add("open-item");
      btn[i].classList.add("open");
    } else {
      content[i].classList.remove("open-item");
      content[i].classList.add("close-item");
      btn[i].classList.remove("open");
    }
  }
}

// btn.addEventListener("click", function () {
//   content.style.display = "block";
// });
