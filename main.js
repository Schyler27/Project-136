Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(480 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480 , 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Staus : Detecting objects";
    document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log('Model Loaded');
    Status = true;
}

function draw(){
    image(video , 0 , 0 , 480 , 380);
}