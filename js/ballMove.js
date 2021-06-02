//Wykonaj czynnosci po odbiciu pilki od dluzszej krawedzi paletek.
const ballPaddleBounce = () =>
{
	ballXSpeed = -ballXSpeed; //Zwrot predkosci na przeciwny.

	speedUp();

	bounceCounter++;
	showBounce();

	ballMoveRight = !ballMoveRight;
}


//Przesun pilke.
const ballMove = () =>
{
    //--------------------- ODBICIA PILKI OD KRAWEDZI POLA GRY ----------------------

    //Odbicie pilki od dolnej lub gornej krawedzi pola gry.
	if(ballY + ballSize >= canvasHeight || ballY <= 0)
	{
		ballYSpeed = -ballYSpeed; //Przeciwny zwrot poruszania sie pilki w osi Y.
		
        //Zwieksz predkosc pilki.
		speedUp();
	}
	
    //Odbicie pilki od lewej krawedzi pola gry (przegrana paletki lewej).
	if((ballX + ballSize) < 0)
    {
        gameOver('left');
    } 
    //Odbicie pilki od prawej krawedzi pola gry (przegrana paletki prawej).
	else if(ballX > canvasWidth)
    {
        gameOver('right');
    }

    //--------------------- ODBICIA PILKI OD KRAWEDZI PALETEK ----------------------

    //Odbicie pilki od dluzszej krawedzi paletki lewej.
	if((ballX <= (padX + padWidth)) && (ballX >= (padX + padWidth + ballXSpeed)))
	{
		if((ballY > (padLY - ballSize)) && ((ballY + ballSize) < (padLY + padLHeight + ballSize))) ballPaddleBounce();
	}
    //Odbicie pilki od dluzszej krawedzi paletki prawej.
	else if(((ballX + ballSize) >= (canvasWidth - padX - padWidth)) && ((ballX + ballSize) <= (canvasWidth - padX - padWidth + ballXSpeed)))
	{
		if((ballY > (padRY - ballSize)) && ((ballY + ballSize) < (padRY + padRHeight + ballSize))) ballPaddleBounce();
	}
    //Odbicie pilki od krotszej krawedzi paletki lewej.
    else if((ballX < (padX + padWidth)) && (ballX > (padX - padWidth)))
	{
        //Krotsza krawedz dolna.
		if((ballY <= (padLY + padLHeight)) && (ballY > (padLY + (padLHeight / 2))))
		{
            //Jesli pilka porusza sie w gore to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed < 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w dol, to nie pozwol, aby przesuwanie paletki w strone pilki spowodowalo jej nalozenie na pilke, a jedynie przesuniecie samej pilki o wartosc przesuniecia paletki + zwiekszenie predkosci pilki.
            else
			{
				ballY = padLY + padLHeight;
				ballYSpeed++;
			}
		}
        //Krotsza krawedz gorna.
		else if(((ballY + ballSize) >= padLY) && ((ballY + ballSize) < (padLY + (padLHeight / 2))))
		{
            //Jesli pilka porusza sie w dol to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed > 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w gore, to ...
            else
			{
				ballY = padLY - ballSize;
				ballYSpeed--;
			}
		}
	}
    //Ddbicie pilki od krotszej krawedzi paletki prawej.
	else if((ballX > (canvasWidth - padX - padWidth - ballSize)) && (ballX < (canvasWidth - padX)))
	{
        //Krotsza krawedz dolna.
		if((ballY <= (padRY + padRHeight)) && (ballY > (padRY + (padRHeight / 2))))
		{
            //Jesli pilka porusza sie w gore to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed < 0) ballYSpeed = -ballYSpeed;
            //A jesli zwrot zostal juz zmieniony i pilka porusza sie w dol, to ...
			else
			{
				ballY = padRY + padRHeight;
				ballYSpeed++;
			}
		}
        //Krotsza krawedz gorna.
		else if(((ballY + ballSize) >= padRY) && ((ballY + ballSize) < (padRY + (padRHeight / 2))))
		{
            //Jesli pilka porusza sie w dol to zmien zwrot predkosci na przeciwny.
			if(ballYSpeed > 0) ballYSpeed = -ballYSpeed;
			//A jesli zwrot zostal juz zmieniony i pilka porusza sie w gore, to ...
            else
			{
				ballY = padRY - ballSize;
				ballYSpeed--;
			}
		}
	}
	
	ballX += ballXSpeed;
	ballY += ballYSpeed;
	
	drawBall();
}