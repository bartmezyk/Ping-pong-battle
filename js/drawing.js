//Rysuj boisko.
const drawPitch = () =>
{
	ctx.fillStyle = pitchColor;
	ctx.fillRect(0, 0, canvasWidth, canvasHeight); //Rysuj prostokat stanowiacy boisko.
	
	ctx.fillStyle = netColor;
	ctx.fillRect(canvasWidth/2 - netWidth/2, 0, netWidth, canvasHeight); //Rysuj siatke pionowa na srodku boiska.

	ctx.fillStyle = lineColor;
	ctx.fillRect(0, canvasHeight/2, canvasWidth, 1); //Rysuj linie pozioma na srodku boiska.
}

//Rysuj paletke lewa.
const drawPaddleLeft = () => 
{
	ctx.fillStyle = paddleLeftColor;
	ctx.fillRect(paddleX, paddleLeftY, paddleWidth, paddleLeftHeight);
}

//Rysuj paletke prawa.
const drawPaddleRight = () =>
{
	ctx.fillStyle = paddleRightColor;
	ctx.fillRect(canvasWidth - paddleX - paddleWidth, paddleRightY, paddleWidth, paddleRightHeight);
}