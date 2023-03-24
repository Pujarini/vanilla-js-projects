const cartContainer = document.getElementById("cart__container");
const products = document.createElement("div");
products.className = "cart__products";

let cartTotalCost = 0;

const cartProducts = [];

function cartInfo() {
  const cartInfo = document.createElement("div");
  cartInfo.className = "cart__info";
  const heading = document.createElement("h2");
  heading.innerHTML = "Cart Items";
  heading.className = "cart__heading";
  cartContainer.appendChild(heading);

  const cartCount = document.createElement("span");
  // cartCount.innerHTML = `Cart Items : ${cartProducts.length}`;
  cartCount.className = "cart__count";

  const cartValue = document.createElement("span");
  // cartTotalValue += products[i].price;
  // cartValue.innerHTML = `Cart Value : ${cartTotalValue}`;
  cartValue.className = "cart__value";

  const cartItem = document.createElement("div");
  cartItem.innerHTML = "Your cart is empty";
  cartItem.className = "cart__status";

  cartInfo.appendChild(cartCount);
  cartInfo.appendChild(cartValue);
  cartInfo.appendChild(cartItem);

  cartContainer.appendChild(cartInfo);
}

cartInfo();

const createCartItem = (product) => {
  const { thumbnail, title, price } = product;
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  let img = document.createElement("img");
  img.src = thumbnail;
  img.setAttribute("lazy", "true");
  img.setAttribute("height", 200);
  img.setAttribute("width", 200);
  const productInfoContainer = document.createElement("div");
  productInfoContainer.className = "product-info-container";
  let productName = document.createElement("h3");
  productName.innerHTML = title;
  let span = document.createElement("span");
  span.innerHTML = "$" + price;
  let productCount = document.createElement("input");
  productCount.setAttribute("type", "number");
  productCount.setAttribute("value", 1);
  productInfoContainer.appendChild(productCount);
  productCard.appendChild(img);
  productInfoContainer.appendChild(productName);
  productInfoContainer.appendChild(span);
  productCard.appendChild(productInfoContainer);
  return productCard;
};

const displayCart = (item) => {
  let cartItem = document.createElement("div");
  const cartInfo = document.querySelector(".cart__info");
  const cartStatus = cartInfo.querySelector(".cart__status");
  if (cartStatus) {
    cartInfo.removeChild(cartStatus);
  }
  const cartTotalItems = cartInfo.querySelector(".cart__count");
  const cartTotalValue = cartInfo.querySelector(".cart__value");
  cartTotalCost += item.price;
  cartTotalItems.innerHTML = `Total Items : ${cartProducts.length}`;
  cartTotalValue.innerHTML = `Total Cart Value : $ ${cartTotalCost}`;
  if (cartProducts.length === 0) {
    cartItem.innerHTML = "Your cart is empty";
  } else {
    cartItem = createCartItem(item);
  }
  products.appendChild(cartItem);
  cartContainer.appendChild(products);
};

function addItemsToCart(products) {
  const cartBtnList = document.querySelectorAll(".cartBtn");
  const cartCount = document.querySelector(".cartItems");

  for (let i = 0; i < cartBtnList.length; i++) {
    cartBtnList[i].addEventListener("click", () => {
      cartProducts.push({ ...products[i] });

      displayCart(products[i]);
      cartCount.innerHTML = cartProducts.length;
    });
  }
}

export default addItemsToCart;
