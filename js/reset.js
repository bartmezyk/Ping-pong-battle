//Resetuj wyniki.
const resetScore = () =>
{
	speedBest = 0; //Reset maksymalnej predkosci pilki podczas pojedynczego zaladowania strony.
	
	leftScore = 0; //Reset wyniku paletki lewej.
	rightScore = 0; //... prawej.
	
	bounceCounter = 0; //Reset ilosci odbic pilki od paletek w pojedynczej rozgrywce.
	bounceBest = 0 //Reset najwiekszej ilosci odbic pilki od paletek podczas pojedynczego zaladowania strony.
	
	showSpeed(); //Wyswietlenie zresetowanych wynikow.
	showScore();
	showBounce();
}

scoreResetButton.addEventListener('click', resetScore);