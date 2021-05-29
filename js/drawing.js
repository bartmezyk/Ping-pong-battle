//rysuj boisko
const drawPitch = () =>
{
	ctx.fillStyle = pitchColor;
	ctx.fillRect(0, 0, canvasWidth, canvasHeight); //rysuje prostokat stanowiacy boisko
	
	ctx.fillStyle = netColor;
	ctx.fillRect(canvasWidth/2 - netWidth/2, 0, netWidth, canvasHeight);

	ctx.fillStyle = lineColor;
	ctx.fillRect(0, canvasHeight/2, canvasWidth, 1);
}