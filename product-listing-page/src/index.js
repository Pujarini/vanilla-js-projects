import fetchProducts from "./utils/fetchProducts";
import "./styles/main.css";
import addItemsToCart from "./utils/addItemsToCart";
import createProduct from "./utils/createProductCard";
const productContainer = document.querySelector(".products__container");
const cartContainer = document.getElementById("cart__container");

async function fetchData() {
  const productData = [];
  const response = await fetchProducts();
  response.forEach((product) => {
    productData.push(product);
  });
  let products = productData
    ? productData.map(createProduct)
    : `<div>No items</div>`;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productContainer.appendChild(product);
  }

  addItemsToCart(response);
}

fetchData();
