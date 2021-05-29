//Resetuj wyniki.
const resetScore = () =>
{
	topSpeed = 0; //Reset maksymalnej predkosci pilki podczas pojedynczego zaladowania strony.
	
	leftScore = 0; //Reset wyniku paletki lewej.
	rightScore = 0; //... prawej.
	
	bounceCounter = 0; //Reset ilosci odbic pilki od paletek w pojedynczej rozgrywce.
	bestBounce = 0 //Reset najwiekszej ilosci odbic pilki od paletek podczas pojedynczego zaladowania strony.
	
	showSpeed(); //Wyswietlenie zresetowanych wynikow.
	showScore();
	showBounce();
}