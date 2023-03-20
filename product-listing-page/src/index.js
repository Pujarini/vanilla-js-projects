import fetchProducts from "./components/fetchProducts";
import "./styles/main.css";
const productContainer = document.querySelector(".products__container");

const cartItems = [];

function createProduct(product) {
  const div = document.createElement("div");
  div.className = "product-card";
  let img = document.createElement("img");
  img.src = product.thumbnail;
  img.setAttribute("lazy", "true");
  img.setAttribute("height", 200);
  img.setAttribute("width", 200);
  const divContainer = document.createElement("div");
  divContainer.className = "product-info-container";
  let title = document.createElement("h3");
  title.innerHTML = product.title;
  let span = document.createElement("span");
  span.innerHTML = "$" + product.price;
  let cartBtn = document.createElement("button");
  cartBtn.innerHTML = "Add to cart";
  cartBtn.className = "cartBtn";
  div.appendChild(img);
  divContainer.appendChild(title);
  divContainer.appendChild(span);
  divContainer.appendChild(cartBtn);
  div.appendChild(divContainer);
  return div;
}

function addToCart(products) {
  const cartBtnList = document.querySelectorAll(".cartBtn");
  cartBtnList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const item = products.find((product) => product.id === index + 1);
      console.log(item);
      cartItems.push(item);
    });
  });
  console.log(cartItems);
}
console.log(cartItems);

async function fetchData() {
  const productData = [];
  const response = await fetchProducts();
  response.forEach((product) => {
    productData.push(product);
  });
  let products = productData
    ? productData.map(createProduct)
    : createProduct("no data");

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productContainer.appendChild(product);
  }
  addToCart(response);
}
//   const cartBtnList = document.querySelectorAll(".cartBtn");
//   cartBtnList.forEach((btn, index) => {
//     btn.addEventListener("click", (e) =>
//       console.log("clicked", response[index])
//     );
//   });
// }

fetchData();
