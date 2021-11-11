song = "";

function preload(){
    song = loadSound("music.mp3")
}

scoreRightwrist = 0;
scoreLeftwrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;


function setup(){
   canvas = CreateCanvas(600, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modalLoaded);
   poseNet.on("pose", gotPoses);
}

function modalLoaded(){
    console.log("PoseNet Has been loaded");
}

function draw() {
	image(video, 0, 0, 600, 500);

    fill("#FF0000")
    stroke("#FF0000")

    if(scoreRightwrist > 0.2)
     {

        circle(rightWristX, rightWristY, 20);
    
        if(rightWristY > 0 && rightWristY <= 100){
         document.getElementById("speed").innerHTML = "speed = 0.5x"
         song.rate(0.5);
        }
       else if(rightWristY > 100 && rightWristY <= 200){
           document.getElementById("speed").innerHTML = "speed = 1x";
           song.rate(1);
       }
       else if (rightWristY > 200 && rightWristY <= 300){
           document.getElementById("speed").innerHTML = "speed = 1.5x";
           song.rate(1.5);
       }
       else if (rightWristY > 300 && rightWristY <= 400){
           document.getElementById("speed").innerHTML = "speed = 2x";
           song.rate(2);
       }
       else if (rightWristY > 400){ 
           document.getElementById("speed").innerHTML = "speed = 2.5x";
           song.rate(2.5);
       }
       
       if(scoreLeftwrist > 0.2) {
           circle(leftWristX, leftWristY, 20);
           InnewleftWristY = number(leftWristY);
           New_leftwristY = floor(InnewleftWristY*2);
           leftWristY_divided_by1000 = New_leftwristY/1000;
           document.getElementById("volume").innerHTML = "The volume is =" + leftWristY_divided_by1000;
           song.setVolume(leftWristY_divided_by1000);
       }
             
    }
}

function gotPoses(){
    if(results.length > 0){
        scoreRightwrist = results[0].pose.keypoints[10].score;
        scoreLeftwrist = results[0].pose.keypoints[9].score;
        console.log("scorerightWrist = " + scoreRightwrist + " " + "scoreleftWrist = " + scoreLeftwrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " " + "rightWristY" + rightWristY);

        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " " + "leftWristY = " + leftWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}