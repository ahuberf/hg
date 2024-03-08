Webcam.set({
    width:270,
    height:200,
    Image_format:"png",
    png_quality:100,
})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function takePicture(){
    Webcam.snap(function(datauri){
      document.getElementById("result").innerHTML="<img id='captureimg' src='"+datauri+"'>" 
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/osHl2nXIi/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}



