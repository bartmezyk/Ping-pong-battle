//Odswiez pole gry i znajdujace sie na nim elementy.
const gameRefresh = () =>
{
	if(!pauseGame)
	{
		drawPitch();
		ballMove();
		drawPaddleLeft();
		//Jesli tryb gry z komputerem to wlacz automatyczne nadawanie wspolrzednych paletce prawej.
		if(mode == 1) paddleComputerMove();
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

	if(ballXSpeed < 0 && ballXSpeedStart > 0) ballXSpeed = -ballXSpeedStart;
	else if(ballXSpeed < 0 && ballXSpeedStart < 0) ballXSpeed = ballXSpeedStart;
	else if(ballXSpeed > 0 && ballXSpeedStart > 0) ballXSpeed = ballXSpeedStart;
	else if(ballXSpeed > 0 && ballXSpeedStart < 0) ballXSpeed = -ballXSpeedStart;

	if(ballXSpeed < 0) ballMoveRight = false;
	else ballMoveRight = true;

	if(ballYSpeed < 0) ballYSpeed = -ballYSpeedStart;
	else ballYSpeed = ballYSpeedStart;

	showScore();

	bounceCounter = 0;
	showBounce();

	showSpeed();
}