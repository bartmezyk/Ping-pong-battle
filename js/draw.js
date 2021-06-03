//Rysuj boisko.
const drawPitch = () =>
{
	ctx.fillStyle = pitchColor;
	ctx.fillRect(0, 0, canvasWidth, canvasHeight); //Rysuj prostokat stanowiacy boisko.
	
	ctx.fillStyle = netColor;
	ctx.fillRect(canvasWidth/2 - netWidth/2, 0, netWidth, canvasHeight); //Rysuj siatke pionowa na srodku boiska.

	ctx.fillStyle = linesColor;
	ctx.fillRect(0, canvasHeight/2, canvasWidth, 1); //Rysuj linie pozioma na srodku boiska.

	canvasDiv.style.outline = `3px solid ${linesColor}`; //Styluj obramowanie pola gry.
}

//Rysuj paletke lewa.
const drawPaddleLeft = () => 
{
	ctx.fillStyle = padLColor;
	ctx.fillRect(padX, padLY, padWidth, padLHeight);
}

//Rysuj paletke prawa.
const drawPaddleRight = () =>
{
	ctx.fillStyle = padRColor;
	ctx.fillRect(canvasWidth - padX - padWidth, padRY, padWidth, padRHeight);
}

//Rysuj pilke.
function drawBall()
{
	ctx.fillStyle = ballColor;
	ctx.fillRect(ballX, ballY, ballSize, ballSize);
}