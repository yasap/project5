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
    var dettext = document.createElement("p");
        dettext.textContent = Camera.description;
    description.appendChild(dettext);
    var price = document.createElement("H3");
        price.textContent = ("£" + Camera.price);
    description.appendChild(price);
        var basketicon = document.createElement("span");
        basketicon.classList.add("fa");
        basketicon.classList.add("fa-shopping-basket");
    description.appendChild(basketicon);
    detailcontainer.appendChild(description);
    })

