//Przesun pilke.
const ballMove = () =>
{
    //--------------------- ODBICIA PILKI OD KRAWEDZI CANVAS ----------------------

    //Odbicie pilki od dolnej lub gornej krawedzi canvas.
	if(ballY + ballSize >= canvasHeight || ballY <= 0)
	{
		ballYSpeed = -ballYSpeed; //Przeciwny zwrot poruszania sie pilki w osi Y.
		
        //+++++Podszybszenie pilki+++++
	}
	
    //Odbicie od lewej krawedzi canvas (przegrana paletki lewej).
	if((ballX + ballSize) < 0)
    {
        ;//+++++Przegrana lewej paletki+++++
    } 
    //Odbicie od prawej krawedzi canvas (przegrana paletki prawej).
	else if(ballX > canvasWidth)
    {
        ;//+++++Przegrana prawej paletki+++++
    }
	
	ballX += ballXSpeed;
	ballY += ballYSpeed;
	
	drawBall();
}