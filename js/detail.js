var urlobject = new URL(window.location.href);
var params = urlobject.searchParams;
let cameraid = params.get("id");

fetch("http://localhost:3000/api/cameras/" + cameraid).then(response => response.json()).then(Camera => {
    console.log('results:', Camera)

    const detailcontainer = document.getElementById("detaillist");
    var det = document.createElement("Div");
    const detailimage = document.createElement("img");
    detailimage.classList.add("Detailimage");
    detailimage.src = Camera.imageUrl;
    detailimage.alt = Camera.name;
    det.appendChild(detailimage);
    detailcontainer.appendChild(det);
    const description = document.createElement("div");
    description.classList.add("descriptions");
    var dettitle = document.createElement("H4");
    dettitle.textContent = Camera.name;
    description.appendChild(dettitle);
    let ul = document.createElement("ul");
    Camera.lenses.forEach(lense => {
        let li = document.createElement("li");
        li.textContent = lense;
        ul.appendChild(li);
    });
    description.appendChild(ul);
    var dettext = document.createElement("p");
    dettext.textContent = Camera.description;
    description.appendChild(dettext);
    var price = document.createElement("H3");
    price.textContent = ("£" + Camera.price);
    description.appendChild(price);
 

    var basketicon = document.createElement("span");
    basketicon.classList.add("basketicon");
    basketicon.classList.add("fa");
    basketicon.classList.add("fa-shopping-basket");
    description.appendChild(basketicon);
    const storage = window.localStorage;
     const cart = (storage.getItem("cart") !=null) ? JSON.parse(storage.getItem("cart")) :[];
         const numberOfCamera = document.createElement("H5");
    numberOfCamera.textContent = cart.length;
       const cartsize = document.getElementById("cartsize");
    cartsize.textContent = cart.length ;
    basketicon.addEventListener('click', (Event) => {
        cart.push(Camera);
        storage.setItem("cart", JSON.stringify(cart));
        cartsize.textContent = cart.length;
    })
    let newItem = cart;
    newItem.count = 1;
    var summary = [newItem];

cart.forEach((item,index) => {
        if (index > 0) {
            let currentIndex = 0;
            var myItem = summary.filter((c, i) => {
                if (cart.id == c.id) {
                    currentIndex = i;
                    return c;
                }
            });
            if (myItem.length > 0) {
                myItem[0].count++;
                summary[currentIndex] = myItem[0];
            }
            else {
                cart.count = 1;
                summary.push(item);
            }
        }
})
        detailcontainer.appendChild(description);
})

    
var carticon = document.getElementById("carticon");
carticon.addEventListener("click", function (Event) {
    window.location.pathname = "/cart.html"
})