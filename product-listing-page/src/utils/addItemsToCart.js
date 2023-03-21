import createProduct from "./createProductCard";

function addToCart(products) {
  const cartBtnList = document.querySelectorAll(".cartBtn");
  const cartItem = document.querySelector(".cartItems");
  const cartContainer = document.querySelector("#cart__container");
  const cartItems = [];
  for (let i = 0; i < cartBtnList.length; i++) {
    cartBtnList[i].addEventListener("click", () => {
      cartItems.push(products[i]);
      if (cartItems.length > 0) {
        cartContainer.style.display = "block";
      } else {
        cartContainer.style.display = "none";
      }
      cartItem.innerHTML = cartItems.length;
    });
  }
}

export default addToCart;
