fetch("http://localhost:3000/api/cameras").then(response => response.json()).then(Cameras => {
    console.log('results:', Cameras)

const storage = window.localStorage;
     const cart = (storage.getItem("cart") !=null) ? JSON.parse(storage.getItem("cart")) :[];
     const cameracontainer = document.getElementById("cameralist");
    Cameras.forEach(camera => {
        var vcam = document.createElement("Div");
        const cameraimage = document.createElement("img");
        cameraimage.src = camera.imageUrl;
        cameraimage.alt = camera.name;
        cameracontainer.classList.add("Camera");
        vcam.classList.add("V-cam");
        vcam.appendChild(cameraimage);
        const description = document.createElement("Div");
        description.classList.add("description");
        var title = document.createElement("H4");
        title.textContent = camera.name;
        description.appendChild(title);
        var text = document.createElement("p");
        text.textContent = camera.description;
        description.appendChild(text);
        vcam.appendChild(description);
        var icons = document.createElement("div");
        icons.classList.add("icons");
        var viewicon = document.createElement("span");
        viewicon.classList.add("fa");
        viewicon.classList.add("fa-binoculars");
        var basketicon = document.createElement("span");
        basketicon.classList.add("fa");
        basketicon.classList.add("fa-shopping-basket");
        var detaillink = document.createElement("a");
        detaillink.href = "detail.html?id="+ camera._id;
        detaillink.appendChild(viewicon);
        icons.appendChild(basketicon);
        
    const cartsize = document.getElementById("cartsize");
    cartsize.textContent = cart.length ;
    basketicon.addEventListener('click', (Event) => {
        cart.push(camera);
        storage.setItem("cart", JSON.stringify(cart));
    cartsize.textContent = cart.length ;
    })

        icons.appendChild(detaillink);
        vcam.appendChild(icons);
         cameracontainer.appendChild(vcam); 
    });
  let newItem = camera;
    newItem.count = 1;
    var summary = [newItem];

    camera.forEach((item, index)=>{
        if (index > 0) {
            let currentIndex = 0;
            var myItem = summary.filter((c, i) => {
                if (camera.id == c.id) {
                    currentIndex = i;
                    return c;
                }
            });
            if (myItem.length > 0) {
                myItem[0].count++;
                summary[currentIndex] = myItem[0];
            }
            else {
                camera.count = 1;
                summary.push(item);
            }
        }
    })
})
    .catch(error => { console.error(error) });