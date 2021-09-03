const storage = window.localStorage;
var cartItems = (storage.getItem("cart") !== null) ? JSON.parse(storage.getItem("cart")):[];
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
const showCartItems = (summary) => {
    while (cart.hasChildNodes()) {
        cart.removeChild(cart.childNodes[0]);
    }
    var sum = 0;
summary.forEach(product => {
    var amount = (product.price * product.count);
    sum = sum + amount;
    var alignItem = document.createElement("div");
    alignItem.classList.add("alignitems");
    var cartTitle = document.createElement("span");
     cartTitle.textContent = product.name;
    alignItem.appendChild(cartTitle); 
    var cartPrice = document.createElement("span");
     cartPrice.textContent = ( product.price);
     alignItem.appendChild(cartPrice);
    var cartQuantity = document.createElement("span");
     cartQuantity.textContent =(product.count);
    alignItem.appendChild(cartQuantity);
    var eachTotal = document.createElement("span");
    eachTotal.classList.add("eachTotal");
    eachTotal.textContent = amount;
    alignItem.appendChild(eachTotal);
    var cartRemove = document.createElement("span");
    cartRemove.classList.add("fa");
    cartRemove.classList.add("fa-trash");
    cartRemove.remove(product.count);
     cartRemove.addEventListener("click", (e) => {
         summary = summary.filter(p => {
             cartItems = cartItems.filter(c=>{
                 return c._id = product._id;
             })
             storage.setItem("cart",JSON.stringify(cartItems));
             return p._id != product._id;
         });
         showCartItems(summary);
      
    })
    alignItem.appendChild(cartRemove);  
    cart.appendChild(alignItem);
 
})
var totalsummary = document.createElement("h2");
totalsummary.classList.add("totalsummary")
totalsummary.textContent = "Total: £" + sum;
cart.appendChild(totalsummary);
}
showCartItems(summary);
var form = document.getElementById("cart-order");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var customerFirstName = form.firstName.value;
    var customerLastName = form.lastName.value;
    var customerEmail = form.email.value;
    var customerAddress = form.address.value;
    var customerCity = form.city.value;
    var contact = { firstName: customerFirstName, lastName: customerLastName, email: customerEmail, address: customerAddress, city: customerCity };
    var myItems = JSON.parse(storage.getItem("cart"));
    var products = myItems.map(item => {
        return item._id;
    })
    var url = "http://localhost:3000/api/cameras/order";
    var body = { contact: contact, products: products };
    fetch(url, { method: "post", body: JSON.stringify(body), headers: { "content-type": "application/json" } })
        .then(res => res.json())
        .then(result => {
            var orderId = result.orderId;
            window.location.href = "/submit.html?order_id=" + orderId ;
        })
        .catch(error => {(console.error(error))})
})
  