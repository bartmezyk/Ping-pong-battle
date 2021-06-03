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
const resetSetting = () =>
{
	//Zresetowanie predkosci paletek.
	padLSpeed = padLSpeedConst;
	padRSpeed = padRSpeedConst;

	//Zresetowanie predkosci startowej i dodawanej pilki.
	ballXSpeedSet = ballXSpeedConst;
	ballYSpeedSet = ballYSpeedConst;
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

	settingMain(); //Reset wygladu w menu ustawien.

	//Zresetowanie predkosci aktualnej pilki.
	ballXSpeed = ballXSpeedSet;
	ballYSpeed = ballYSpeedSet;

	changeBallPositionToCenter();
}

scoreResetButton.addEventListener('click', resetScore);
settingsResetButton.addEventListener('click', resetSetting);