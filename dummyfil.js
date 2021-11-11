function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

		if(rightWristY >0 && rightWristY <= 100)
		{
			document.getElementById("speed").innerHTML = "Speed = 0.5x";		
			song.rate(0.5);
		}
		else if(rightWristY >100 && rightWristY <= 200)
		{
			document.getElementById("speed").innerHTML = "Speed = 1x";		
			song.rate(1);
		}
		else if(rightWristY >200 && rightWristY <= 300)
		{
			document.getElementById("speed").innerHTML = "Speed = 1.5x";		
			song.rate(1.5);
		}
		else if(rightWristY >300 && rightWristY <= 400)
		{
			document.getElementById("speed").innerHTML = "Speed = 2x";		
			song.rate(2);
		}
		else if(rightWristY >400)
		{
			document.getElementById("speed").innerHTML = "Speed = 2.5x";		
			song.rate(2.5);
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		InNumberleftWristY = Number(leftWristY);
		new_leftWristY = floor(InNumberleftWristY *2);
		leftWristY_divide_1000 = new_leftWristY/1000;
		document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;		
		song.setVolume(leftWristY_divide_1000);	
	}

}