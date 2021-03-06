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

//Resetuj ustawienia.
const resetSettings = () =>
{
	//Zresetowanie predkosci paletek.
	padLSpeed = padLSpeedConst;
	padRSpeed = padRSpeedConst;

	//Zresetowanie predkosci startowej i dodawanej pilki.
	ballXSpeedStart = ballXSpeedConst;
	ballYSpeedStart = ballYSpeedConst;
	ballXSpeedIncr = ballXSpeedIncrConst;
	ballYSpeedIncr = ballYSpeedIncrConst;

	//Zresetowanie wielkosci paletek i pilki.
	padLHeight = padLHeightConst;
	padRHeight = padRHeightConst;
	ballSize = ballSizeConst;

	//Zresetowanie kolorow.
	pitchColor = pitchColorConst;
	netColor = netColorConst;
	linesColor = lineColorConst;
	padLColor = padLColorConst;
	padRColor = padRColorConst;
	ballColor = ballColorConst;

	//Reset radioboxow w menu ustawien 'MODE'.
	changeMode();
	changeModeCom();

	settingsMain(); //Reset wygladu w menu ustawien.

	//Zresetowanie predkosci aktualnej pilki.
	ballXSpeed = ballXSpeedStart;
	ballYSpeed = ballYSpeedStart;
	showSpeed();

	//Zresetowanie polozenia pilki i paletek na srodek wzdluz osi Y.
	ballPositionCenter();
	padLY = canvasHeight / 2 - padLHeight / 2;
	padRY = canvasHeight / 2 - padRHeight / 2;
}