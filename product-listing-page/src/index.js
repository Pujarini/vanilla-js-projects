import fetchProducts from "./components/fetchProducts";
import "./styles/main.css";
const productContainer = document.querySelector(".products__container");

function createProduct(product) {
  const div = document.createElement("div");
  div.className = "product-card";
  let img = document.createElement("img");
  img.src = product.images[0];
  let title = document.createElement("h3");
  title.innerHTML = product.title;
  let span = document.createElement("span");
  span.innerHTML = "$" + product.price;
  let cartBtn = document.createElement("button");
  cartBtn.innerHTML = "Add to cart";
  cartBtn.className = "cartBtn";
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(span);
  div.appendChild(cartBtn);
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
