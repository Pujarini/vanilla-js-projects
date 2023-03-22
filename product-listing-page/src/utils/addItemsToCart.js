const cartContainer = document.getElementById("cart__container");

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

const cartProducts = [];
const displayCart = (item) => {
  let cartItem = document.createElement("div");
  if (cartProducts.length === 0) {
    cartItem.innerHTML = "Your cart is empty";
  } else {
    cartItem = createCartItem(item);
  }
  cartContainer.appendChild(cartItem);
};

function addItemsToCart(products) {
  const cartBtnList = document.querySelectorAll(".cartBtn");
  const cartCount = document.querySelector(".cartItems");

  for (let i = 0; i < cartBtnList.length; i++) {
    cartBtnList[i].addEventListener("click", () => {
      cartProducts.push({ ...products[i] });
      displayCart(products[i]);
      if (cartProducts.length > 0) {
        cartContainer.style.display = "block";
      } else {
        cartContainer.style.display = "none";
      }
      cartCount.innerHTML = cartProducts.length;
    });
  }
}

export default addItemsToCart;
