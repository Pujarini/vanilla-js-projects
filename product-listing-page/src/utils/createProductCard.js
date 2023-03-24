function createProduct(product) {
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
  let cartBtn = document.createElement("button");
  cartBtn.innerHTML = "Add to cart";
  cartBtn.className = "cartBtn";
  productCard.appendChild(img);
  productInfoContainer.appendChild(productName);
  productInfoContainer.appendChild(span);
  productCard.appendChild(productInfoContainer);
  productInfoContainer.appendChild(cartBtn);
  return productCard;
}

export default createProduct;
