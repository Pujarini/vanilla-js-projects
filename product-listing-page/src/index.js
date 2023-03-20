import fetchProducts from "./components/fetchProducts";
import "./styles/main.css";
const productContainer = document.querySelector(".products__container");

function createProduct(product) {
  const div = document.createElement("div");
  div.className = "product-card";
  let img = document.createElement("img");
  img.src = product.images[0];
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

async function fetchData() {
  const productData = [];
  const response = await fetchProducts();
  response.forEach((product) => {
    productData.push(product);
  });
  let products = productData
    ? productData.map(createProduct)
    : createProduct("no data");
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productContainer.appendChild(product);
  }
}

fetchData();
