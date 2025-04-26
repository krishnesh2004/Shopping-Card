document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 49.99 },
    { id: 2, name: "Product 2", price: 59.99 },
    { id: 3, name: "Product 3", price: 69.99 },
  ];

  const cart = [];
  const productlist = document.getElementById("productlist");
  const carditem = document.getElementById("carditem");
  const emptycard = document.getElementById("empty-card");
  const cardtotal = document.getElementById("card-total");
  const totalprices = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productdiv = document.createElement("div");
    productdiv.classList.add("product");
    productdiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productlist.appendChild(productdiv);
  });

  productlist.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productid = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productid);
      addtocart(product);
    }
    function addtocart(product) {
      cart.push(product);
      rendercart(cart);
    }
  });

  function rendercart() {
    carditem.innerText = "";
    let totalprice = 0;
    if (cart.length > 0) {
      emptycard.classList.add("hidden");
      cardtotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.price;
        const carditems = document.createElement("div");
        carditems.innerHTML = `
        ${item.name}-$${item.price.toFixed(2)}
        `;
        carditem.appendChild(carditems);
        totalprices.textContent = `${totalprice.toFixed(2)}`;
      });
    } else {
      emptycard.classList.remove("hidden");
      totalprices.textContent = `$0.00`;
    }
  }

  checkoutbtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Succesfully");
    rendercart();
  });
});
