var rightWristX = "";
var rightWristY = "";
var rightWrist_confidence = "";

function setup(){
  canvas = createCanvas(700,600);
  canvas.parent("canvas");
  video = createCapture(VIDEO);
  video.size(700,600);
  video.parent('camera_div');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', getPoses);
}

function getPoses(results){

  if(results.length > 0){
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    rightWrist_confidence = results[0].pose.rightWrist.confidence;
    console.log("Right Wrist X = " + rightWristX + " Right Wrist Y = " + rightWristY + "Confidence of Right Wrist: " + rightWrist_confidence);
  }

}

function draw(){
  if(rightWrist_confidence >= 0.01){
    background(255);
    stroke('red');
    fill('red');
    circle(rightWristX,rightWristY,10);
  }
  
}

function modelLoaded(){
  console.log("Model is loaded.");
}
