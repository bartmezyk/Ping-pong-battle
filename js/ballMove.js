//Przesun pilke.
const ballMove = () =>
{
    //--------------------- ODBICIA PILKI OD KRAWEDZI POLA GRY ----------------------

    //Odbicie pilki od dolnej lub gornej krawedzi pola gry.
	if(ballY + ballSize >= canvasHeight || ballY <= 0)
	{
		ballYSpeed = -ballYSpeed; //Przeciwny zwrot poruszania sie pilki w osi Y.
		
        //+++++Podszybszenie pilki+++++
	}
	
    //Odbicie pilki od lewej krawedzi pola gry (przegrana paletki lewej).
	if((ballX + ballSize) < 0)
    {
        ;//+++++Przegrana lewej paletki+++++
    } 
    //Odbicie pilki od prawej krawedzi pola gry (przegrana paletki prawej).
	else if(ballX > canvasWidth)
    {
        ;//+++++Przegrana prawej paletki+++++
    }

    //--------------------- ODBICIA PILKI OD KRAWEDZI PALETEK ----------------------

    //Odbicie pilki od dluzszej krawedzi paletki lewej.
	if((ballX <= (paddleX + paddleWidth)) && (ballX >= (paddleX + paddleWidth + ballXSpeed)))
	{
		if((ballY > (paddleLeftY - ballSize)) && ((ballY + ballSize) < (paddleLeftY + paddleLeftHeight + ballSize)))
		{
			ballXSpeed = -ballXSpeed;

			//+++++Podszybszenie pilki+++++

			ballMoveRight = true;
		}
	}
    //Odbicie pilki od dluzszej krawedzi paletki prawej.
	else if(((ballX + ballSize) >= (canvasWidth - paddleX - paddleWidth)) && ((ballX + ballSize) <= (canvasWidth - paddleX - paddleWidth + ballXSpeed)))
	{
		if((ballY > (paddleRightY - ballSize)) && ((ballY + ballSize) < (paddleRightY + paddleRightHeight + ballSize)))
		{
			ballXSpeed = -ballXSpeed;

			//+++++Podszybszenie pilki+++++

			ballMoveRight = false;
		}
	}
    //Odbicie pilki od krotszej krawedzi paletki lewej.
    else if((ballX < (paddleX + paddleWidth)) && (ballX > (paddleX - paddleWidth)))
	{
        //Krotsza krawedz dolna.
		if((ballY <= (paddleLeftY + paddleLeftHeight)) && (ballY > (paddleLeftY + (paddleLeftHeight / 2))))
		{
            //Jesli pilka porusza sie w gore to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed < 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w dol, to nie pozwol, aby przesuwanie paletki w strone pilki spowodowalo jej nalozenie na pilke, a jedynie przesuniecie samej pilki o wartosc przesuniecia paletki + zwiekszenie predkosci pilki.
            else
			{
				ballY = paddleLeftY + paddleLeftHeight;
				ballYSpeed++;
			}
		}
        //Krotsza krawedz gorna.
		else if(((ballY + ballSize) >= paddleLeftY) && ((ballY + ballSize) < (paddleLeftY + (paddleLeftHeight / 2))))
		{
            //Jesli pilka porusza sie w dol to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed > 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w gore, to ...
            else
			{
				ballY = paddleLeftY - ballSize;
				ballYSpeed--;
			}
		}
	}
    //Ddbicie pilki od krotszej krawedzi paletki prawej.
	else if((ballX > (canvasWidth - paddleX - paddleWidth - ballSize)) && (ballX < (canvasWidth - paddleX)))
	{
        //Krotsza krawedz dolna.
		if((ballY <= (paddleRightY + paddleRightHeight)) && (ballY > (paddleRightY + (paddleRightHeight / 2))))
		{
            //Jesli pilka porusza sie w gore to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed < 0) ballYSpeed = -ballYSpeed;
            //A jesli zwrot zostal juz zmieniony i pilka porusza sie w dol, to ...
			else
			{
				ballY = paddleRightY + paddleRightHeight;
				ballYSpeed++;
			}
		}
        //Krotsza krawedz gorna.
		else if(((ballY + ballSize) >= paddleRightY) && ((ballY + ballSize) < (paddleRightY + (paddleRightHeight / 2))))
		{
            //Jesli pilka porusza sie w dol to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed > 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w gore, to ...
            else
			{
				ballY = paddleRightY - ballSize;
				ballYSpeed--;
			}
		}
	}
	
	ballX += ballXSpeed;
	ballY += ballYSpeed;
	
	drawBall();
}