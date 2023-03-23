import "./styles/main.css";
const panelList = document.querySelectorAll(".panel");

console.log(panelList);

panelList.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    const activeClass = e.target.classList.contains("active");
    if (!activeClass) {
      e.target.classList.add("active");
    }
  });
});

function removeActiveClass() {
  panelList.forEach((panel) => {
    panel.classList.remove("active");
  });
}
