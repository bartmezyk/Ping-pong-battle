//Odswiez pole gry i znajdujace sie na nim elementy.
const game = () =>
{
    drawPitch();
    ballMove();
    drawPaddleLeft();
    drawPaddleRight();
}

//Wykonaj czynnosci po przegranej ktorejs z paletek.
const gameOver = defeatedPaddle =>
{
	if(defeatedPaddle == 'left') rightScore++; //Przegrana paletki lewej.
	else if(defeatedPaddle == 'right') leftScore++; //Przegrana paletki prawej.
    console.log('Paletka lewa: ' + leftScore+'; paletka prawa: ' + rightScore)
	
	ballX = canvasWidth / 2 - ballSize / 2; //Polozenie pilki na srodku wzdluz osi X.
	//ballY = canvasHeight/2 - ballSize/2; //Polozenie pilki na srodku wzdluz osi Y.
	ballY = Math.floor(Math.random() * (canvasHeight - ballSize)); //Losowanie polozenia pilki wzdluz osi Y z zakresu wysokosci pola gry.
	
	ballXSpeed = -ballXSpeed; //Aby pilka poruszala sie w kierunku gracza, ktory wygral poprzednia rozgrywke.
	ballMoveRight = !ballMoveRight;
}

//60 razy na sekunde pole gry odswiezane.
setInterval(game, 1000/60);

showScore();

showBounce();