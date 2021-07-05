var urlobject = new URL(window.location.href);
var params = urlobject.searchParams;
let cameraid = params.get("id");

fetch("http://localhost:3000/api/cameras/" + cameraid).then(response => response.json()).then(Camera => {
    console.log('results:', Camera)

    var image = document.createElement("img");
    image.src = Camera.imageUrl;
    document.body.appendChild(image);


 const detailcontainer = document.getElementById("detaillist");
        var det = document.createElement("Div");
    const detailimage = document.createElement("img");
        detailimage.src = cameraid.imageUrl;
        detailimage.alt = cameraid.name;
        detailimage.style.width = "50px";
        detailimage.style.height = "10px";
    det.appendChild(detailimage);
        const description = document.createElement("div");
    description.classList.add("descriptions");
    var title = document.createElement("H4");
        title.textContent = cameraid.name;
    description.appendChild(title);
    var text = document.createElement("p");
        text.textContent = cameraid.description;
        description.appendChild(text);
    description.appendChild(title);
    var icon = document.createElement("div");
        icon.classList.add("icons");
        var basketicon = document.createElement("span");
        basketicon.classList.add("fa");
        basketicon.classList.add("fa-shopping-basket");
        var detaillink = document.createElement("a");
        detaillink.href = "detail.html?id=" + camera._id;
        icons.appendChild(basketicon);
        icons.appendChild(detaillink);
        vcam.appendChild(icons);
    })

