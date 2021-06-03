//Odswiez pole gry i znajdujace sie na nim elementy.
const gameRefresh = () =>
{
	if(!pauseGame)
	{
		drawPitch();
		ballMove();
		drawPaddleLeft();
		//Jesli tryb gry z komputerem to wlacz automatyczne nadawanie wspolrzednych paletce prawej.
		if(mode == 1) computerPaddleMove();
		drawPaddleRight();
	}
}

//Wykonaj czynnosci po przegranej ktorejs z paletek.
const gameOver = defeatedPaddle =>
{
	if(defeatedPaddle == 'left') rightScore++; //Przegrana paletki lewej.
	else if(defeatedPaddle == 'right') leftScore++; //Przegrana paletki prawej.
	
	ballX = canvasWidth / 2 - ballSize / 2; //Polozenie pilki na srodku wzdluz osi X.
	//ballY = canvasHeight/2 - ballSize/2; //Polozenie pilki na srodku wzdluz osi Y.
	ballY = Math.floor(Math.random() * (canvasHeight - ballSize)); //Losowanie polozenia pilki wzdluz osi Y z zakresu wysokosci pola gry.
	
	ballXSpeed = -ballXSpeed; //Aby pilka poruszala sie w kierunku gracza, ktory wygral poprzednia rozgrywke.
	ballMoveRight = !ballMoveRight;

	if(ballXSpeed < 0) ballXSpeed = -ballXSpeedSet;
	else ballXSpeed = ballXSpeedSet;

	if(ballXSpeed < 0) ballMoveRight = false;
	else ballMoveRight = true;

	if(ballYSpeed < 0) ballYSpeed = -ballYSpeedSet;
	else ballYSpeed = ballYSpeedSet;

	showScore();

	bounceCounter = 0;
	showBounce();

	showSpeed();
}

//60 razy na sekunde pole gry odswiezane.
setInterval(gameRefresh, 1000/60);