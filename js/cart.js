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
    var alignItem = document.createElement("div");
    alignItem.classList.add("alignitems");
    var cartTitle = document.createElement("h5");
     cartTitle.textContent = product.name;
    alignItem.appendChild(cartTitle); 
var cartPrice = document.createElement("p");
     cartPrice.textContent = ("Price: £" +"" + product.price);
     alignItem.appendChild(cartPrice);
    var cartQuantity = document.createElement("span");
     cartQuantity.textContent =("Quantity:" +  "" + product.count);
    alignItem.appendChild(cartQuantity);
    var eachTotal = document.createElement("div");
    eachTotal.classList.add("eachTotal");
    eachTotal.textContent = "£" + amount;
    alignItem.appendChild(eachTotal);
    var cartRemove = document.createElement("button");
    cartRemove.classList.add("fa");
    cartRemove.classList.add("fa-trash");
    cartRemove.remove(product.count);
     cartRemove.addEventListener("click", (e) => {
        summary.filter(p => {
            return p._id != cameraid._id
        })
    })
    alignItem.appendChild(cartRemove);  
    cart.appendChild(alignItem);
 
})
var totalsummary = document.createElement("h2");
totalsummary.classList.add("totalsummary")
totalsummary.textContent = "Total: £" + sum;
cart.appendChild(totalsummary);

var form = document.getElementById("cart-order");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var customerName = form.name.value;
    var customerCard = form.card_number.value;
    var customerAddress = form.address.value;
    console.log(customerAddress);
    var contact = { name: customerName, card_number: customerCard, address: customerAddress };
    var products = cartItems;
    var url = "http://localhost:3000/api/cameras/order";
    var body = { contact: contact , products: products };
})
  