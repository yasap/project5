const storage = window.localStorage;
const cartItems = (storage.getItem("cart") !== null) ? JSON.parse(storage.getItem("cart")):[];
const cart = document.getElementById("cartsummary");
  let newItem = cartItems[0];
    newItem.count = 1;
    var summary = [];
summary.push(newItem);
cartItems.forEach((item, index) => {
    if (index > 0) {
        let currentIndex = 0;
        var myItem = summary.filter((c, i) => {
            if (item._id == c._id) {
                currentIndex = i;
                return c;
            }
        });
        if (myItem.length > 0) {
            myItem[0].count++;
            summary[currentIndex] = myItem[0];
        }
        else {
            item.count = 1;
            summary.push(item);
        }
    }
})
var sum = 0;

summary.forEach(product => {
    var amount = (product.price * product.count);
    sum = sum + amount;
    var cartTitle = document.createElement("h5");
     cartTitle.textContent = product.name;
    cart.appendChild(cartTitle);
    var cartRemove = document.createElement("button");
    cartRemove.classList.add("remove")
    cartRemove.remove(product.count);
     cartRemove.textContent = "Remove";
     cart.appendChild(cartRemove);   
var cartPrice = document.createElement("p");
     cartPrice.textContent = ("£" +"" + product.price);
     cart.appendChild(cartPrice);
    var cartQuantity = document.createElement("span");
    cartQuantity.classList.add("quantity");
     cartQuantity.textContent =("Quantity:" +  "" + product.count);
    cart.appendChild(cartQuantity);
    var eachTotal = document.createElement("div");
    eachTotal.classList.add("eachtotal");
    eachTotal.textContent = "£" + amount;
    cart.appendChild(eachTotal);
 
})
var totalsummary = document.createElement("h2");
totalsummary.classList.add("totalsummary")
totalsummary.textContent = "Total: £" + sum;
cart.appendChild(totalsummary);

var proceed = document.createElement("button");
proceed.classList.add("proceed");
proceed.textContent = "SUBMIT";
proceed.addEventListener("click", function (Event) {
    window.location.pathname = "/submit.html"
})
    cart.appendChild(proceed);