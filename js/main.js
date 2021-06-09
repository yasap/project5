fetch("http://localhost:3000/api/cameras").then(response => response.json()).then(Cameras => {
    console.log('results:', Cameras)
    var camera1 = Cameras[0];
const cameracontainer= document.getElementById("cameralist");
    var vcam = document.createElement("Div");
const cameraimage = document.createElement("img");
cameraimage.src = camera1.imageUrl;
    cameraimage.alt = camera1.name;
    cameracontainer.classList.add("Camera");
    vcam.classList.add("V-cam");
    vcam.appendChild(cameraimage);
    cameracontainer.appendChild(vcam);
    const description = document.createElement("Div");
    description.classList.add("description")
    var title = document.createElement("H4");
    title.textContent = camera1.name;
    description.appendChild(title);
    var text = document.createElement("p");
    text.textContent = camera1.description;
    description.appendChild(text);
    vcam.appendChild(description);




// document.getElementsByClassName("description");
// const description = document.createElement("h4");
// description.textContent = "The PRONTOR ZEISS-IKON COLOR-PANTAR 1:2,8/45"
// const description = document.createElement("p");
// description.textContent = "Introduced in the mid 1950s, this was a simple 35mm camera with superb Zeiss build quality.This example is the slightly later version introduced in 1958It is in very good condition with shutter, metering and film advance working correctly and smooth focus operation. The optics are fungus free"
// CameraList.appendChild(VCam);


// const option = document.createElement(span);
// document.getElementsByClassName("option");
// option.src = "fa fa-shopping-basket"

})
    .catch(error => { console.error(error) })