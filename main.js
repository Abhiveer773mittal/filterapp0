function preload()
{

}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(400,400);
video.hide();

posenet = ml5.psenet(video , modelLoaded);

posenet.on("pose" , gotPose);

}

function draw()
{
image(video,0,0,400,400);
}

function save()
{
    save("image.png");
}

function modelLoaded()
{
    console.log("ap dhillon");
}

function gotPose(results)
{
    console.log("filter x :" + results[0].pose.filter.x);
    console.log("filter y :" + results[0].pose.filter.y);
}