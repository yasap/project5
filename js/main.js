fetch("http://localhost:3000/api/cameras").then(response => response.json()).then(Cameras => {
    console.log('results:', Cameras)
})
    .catch(error => { console.error(error) })

var Camera = [camera0, camera1, camera2, camera3, camera4];
const Camera= document.getElementById("CameraList");
document.getElementById("VCam");
var first = camera[0];
const VCam = document.createElement("img");
VCam.src = "../image/vcam_1.jpg";
VCam.width = 300;
VCam.height = 300;
VCam.appendChild(Camera);


document.getElementsByClassName("description");
const description = document.createElement("h4");
description.textContent = "The PRONTOR ZEISS-IKON COLOR-PANTAR 1:2,8/45"
const description = document.createElement("p");
description.textContent = "Introduced in the mid 1950s, this was a simple 35mm camera with superb Zeiss build quality.This example is the slightly later version introduced in 1958It is in very good condition with shutter, metering and film advance working correctly and smooth focus operation. The optics are fungus free"
VCam.appendChild(CameraList);


const option = document.createElement(span);
document.getElementsByClassName("option");
option.src = "fa fa-shopping-basket"
