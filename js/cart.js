const cart = document.getElementById("cartsummary");
const cartimage = document.createElement("img");
    cartimage.classList.add("cartimage");
    cartimage.src = Camera.imageUrl;
    cartimage.alt = Camera.name;
cart.appendChild(cartimage);
    var cartTitle = document.createElement("h1");
cartTitle.textContent = Camera.name;
var cartPrice = document.createElement("p");
cartPrice.textContent = Camera.price;
var cartQuantity = document.createElement("span");
cartQuantity.textContent = cart.count;
var cartRemove = document.createElement("button");
cartRemove.textContent = Remove;

    description.appendChild(dettitle);