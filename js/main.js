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



