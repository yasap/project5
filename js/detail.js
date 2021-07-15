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
    const storage = window.localStorage;
    for (let i = 0; i < Camera.lenght; i++){
        basketicon[i].addEventListener('click', () =>
            cameraNumbers();
    
        )}
function cameraNumbers() {
    ler itemNumbers = localStorage.getItem('cameraNumbers');
    itemNumbers = parseInt(itemNumbers);
        localStorage.setItem("cameraNumbers", 1)
}
        description.appendChild(basketicon);
        detailcontainer.appendChild(description);
    })