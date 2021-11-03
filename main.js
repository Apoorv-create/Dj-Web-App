song = "";

function preload(){
    song = loadSound("")
}

scoreRightwrist = 0;
scoreLeftwrist = 0;

RightwristX = 0;
RightwristY = 0;

LeftwristX = 0;
LeftwristY = 0;


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