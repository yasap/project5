var urlobject = new URL(window.location.href);
var params = urlobject.searchParams;
let cameraid = params.get("id");

fetch("http://localhost:3000/api/cameras/" + cameraid).then(response => response.json()).then(Camera => {
    console.log('results:', Camera)

    var image = document.createElement("img");
    image.src = Camera.imageUrl;
    document.body.appendChild(image);


 const detailcontainer = document.getElementById("detaillist");
    Cameras.forEach(camera => {
        var det = document.createElement("Div");
        const detailimage = document.createElement("img");
        detailimage.src = camera.imageUrl;
        detailimage.alt = camera.name;
        det.appendChild("detailimage");
        const detaildescription = document.createElement("div");
        detaildescription.classList.add("detailsdescription");
        det.appendChild("detaildescription");
         icons.classList.add("icons");
        var basketicon = document.createElement("span");
        basketicon.classList.add("fa");
        basketicon.classList.add("fa-shopping-basket");
        var detaillink = document.createElement("a");
        detaillink.href = "detail.html?id="+ camera._id;
        icons.appendChild(basketicon);
        icons.appendChild(detaillink);
        vcam.appendChild(icons);

   
    });
