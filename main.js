function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(500,200);
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,500,500);
}

function take_snapshot(){
    save('Image.png');
}

function gotposes(result){
    if(result.length > 0){
        console.log(result);
        console.log("noseX = "+result[0].pose.nose.x);
        console.log("nosey = "+result[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log("poseNet is initialised");
}