noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('Posenet is loaded');
}
function draw()
{
    background('#00ffc3');
    document.getElementById("square_sides").innerHTML="Width and the Height of the square will be="+difference+"px";
    fill('#ffadfa');
    stroke('#ffadfa');
    square(noseX,noseY,100);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}