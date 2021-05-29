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

    //--------------------- ODBICIA PILKI OD DLUZSZYCH KRAWEDZI PALETEK ----------------------
	if((ballX <= (paddleX + paddleWidth)) && (ballX >= (paddleX + paddleWidth + ballXSpeed))) //Odbicie pilki od dluzszej krawedzi paletki lewej.
	{
		if((ballY > (paddleLeftY - ballSize)) && ((ballY + ballSize) < (paddleLeftY + paddleLeftHeight + ballSize)))
		{
			ballXSpeed = -ballXSpeed;

			//+++++Podszybszenie pilki+++++

			ballMoveRight = true;
		}
	}
	else if(((ballX + ballSize) >= (canvasWidth - paddleX - paddleWidth)) && ((ballX + ballSize) <= (canvasWidth - paddleX - paddleWidth + ballXSpeed))) //Odbicie pilki od dluzszej krawedzi paletki prawej.
	{
		if((ballY > (paddleRightY - ballSize)) && ((ballY + ballSize) < (paddleRightY + paddleRightHeight + ballSize)))
		{
			ballXSpeed = -ballXSpeed;

			//+++++Podszybszenie pilki+++++

			ballMoveRight = false;
		}
	}
    //--------------------- ODBICIA PILKI OD KROTSZYCH KRAWEDZI PALETEK ----------------------
    
	
	ballX += ballXSpeed;
	ballY += ballYSpeed;
	
	drawBall();
}