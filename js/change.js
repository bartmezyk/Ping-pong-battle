//Zmien tryb gry.
const changeMode = e =>
{
	//Zmien tryb gry w zmiennej globalnej. Jesli nie podeslano argumentu eventu to uznaj, ze wybrano radiobox pierwszy, czyli single player bez komputera.
	if(e === undefined) mode = 0;
    else mode = e.target.dataset.mode;

	radioModes[mode].checked = true;

	//Zmien zawartosc w prawej czesci komtentu w menu ustawien w zaleznosci od wybranego radioboxa (poprzez nadanie lub zabranie klasy).
	if(mode == 0)
	{
		settModeRightSin.classList.add('settingsContent__right--deactive');
		settModeRightMul.classList.add('settingsContent__right--deactive');

		settModeBtn.classList.add('applyButton--hidden');
	}
	if(mode == 1)
	{
		settModeRightMul.classList.add('settingsContent__right--deactive');
		settModeRightSin.classList.remove('settingsContent__right--deactive');

		settModeBtn.classList.add('applyButton--hidden');
	}
	else if(mode == 2)
	{
		settModeRightSin.classList.add('settingsContent__right--deactive');
		settModeRightMul.classList.remove('settingsContent__right--deactive');

		settModeBtn.classList.remove('applyButton--hidden');
	}

	//Aktualizuj inputy poprzez wstawienie do nich wartosci odpowiednich zmiennych.
    inputsSet();
}

//Zmien poziom gracza komputerowego.
const changeModeCom = e =>
{
	//Jesli nie podeslano argumentu eventu to uznaj, ze wybrano radiobox pierwszy, czyli tryb easy komputera.
	if(e === undefined) modeCom = 0;
    else modeCom = e.target.dataset.modecom;

	radioModesCom[modeCom].checked = true;
}

//Zmien predkosc paletek.
const changePaddleSpeed = () =>
{
	//Jesli przycik 'APPLY' w menu ustawien w opcji 'MODE' jest widoczny (aby nie dalo sie zmienic predkosci paletek, czyli kliknac go, gdy jest on ukryty).
	if(!settModeBtn.classList.contains('applyButton--hidden'))
	{
		//Paletka lewa.
		if(checkNumber(inpSpeedPadL, 1, canvasHeight, padLSpeed)) padLSpeed = checkNumber(inpSpeedPadL, 1, canvasHeight, padLSpeed);

		//Paletka lewa.
		if(checkNumber(inpSpeedPadR, 1, canvasHeight, padRSpeed)) padRSpeed = checkNumber(inpSpeedPadR, 1, canvasHeight, padRSpeed);
	}
}

//Zmien predkosc startowa i dodawana pilki.
const changeBallSpeed = () =>
{
	//Predkosc startowa pilki wzdluz osi X.
	if(checkNumber(inpSpeedX, -ballXSpeedMax, ballXSpeedMax, ballXSpeedStart)) 
	{
		ballXSpeedStart = checkNumber(inpSpeedX, -ballXSpeedMax, ballXSpeedMax, ballXSpeedStart);

		ballXSpeed = ballXSpeedStart;

		if(ballXSpeed > 0 ) ballMoveRight = true;
		else ballMoveRight = false;

		showSpeed();
		ballPositionCenter();
	}

	//Predkosc startowa pilki wzdluz osi Y.
	if(checkNumber(inpSpeedY, -ballYSpeedMax, ballYSpeedMax, ballYSpeedStart))
	{
		ballYSpeedStart = checkNumber(inpSpeedY, -ballYSpeedMax, ballYSpeedMax, ballYSpeedStart);

		ballYSpeed = ballYSpeedStart;

		showSpeed();
		ballPositionCenter();
	}

	//Predkosc dodawana pilki wzdluz osi X.
	if(checkNumber(inpSpeedXIncr, 0, ballXSpeedIncrMax, ballXSpeedIncr)) ballXSpeedIncr = checkNumber(inpSpeedXIncr, 0, ballXSpeedIncrMax, ballXSpeedIncr);

	//Predkosc dodawana pilki wzdluz osi Y.
	if(checkNumber(inpSpeedYIncr, 0, ballYSpeedIncrMax, ballYSpeedIncr)) ballYSpeedIncr = checkNumber(inpSpeedYIncr, 0, ballYSpeedIncrMax, ballYSpeedIncr);
}

//Zmien wielkosc paletek i pilki.
const changeSize = () =>
{
	let oldSize;

	//Paletka lewa.
	oldSize = padLHeight;
	padLHeight = checkNumber(inpHeightPadL, padHeightMin, canvasHeight, padLHeight);
	if(padLHeight == false) padLHeight = oldSize;
	else
	{
		//Aby pilka po modyfikacji wielkosci paletek znajdowala sie na srodku pola gry (aby ktos nie zechcial zmodyfikowac wielkosc (a wiec i polozenie) paletki w miejscu, gdzie akurat polozona jest pilka).
		ballPositionCenter();

		//Aby paletka po modyfikacji wielkosci nie wystawala pod dolna krawedz pola gry.
		if(padLY + padLHeight > canvasHeight) padLY = canvasHeight - padLHeight;
	}

	//Paletka prawa.
	oldSize = padRHeight;
	padRHeight = checkNumber(inpHeightPadR, padHeightMin, canvasHeight, padRHeight);
	if(padRHeight == false) padRHeight = oldSize;
	else
	{
		ballPositionCenter();

		if(padRY + padRHeight > canvasHeight) padRY = canvasHeight - padRHeight;
	}

	//Pilka.
	oldSize = ballSize;
	ballSize = checkNumber(inpSizeBall, ballSizeMin, canvasHeight, ballSize);
	if(ballSize == false) ballSize = oldSize;
	else
	{
		//Aby pilka po modyfikacji jej wielkosci znajdowala sie na srodku pola gry (aby ktos nie zechcial zwiekszac pilki, ktora znajdowalaby sie przy krawedzi pola gry, co mogloby spowodowac ze czesc pilki zaczelaby wystawac poza pole gry)
		ballPositionCenter();
	}

	//Aktualizuj wyglad elementow w polu gry.
	drawPitch();
	drawPaddleLeft();
	drawPaddleRight();
	drawBall();
}

//Zmien kolory elementow w polu gry.
const changeColor = e =>
{
	const inpId = e.target.id;
	const inpValue = e.target.value; 
	
	//Jesli nazwa koloru wpisana w inpucie koloru jest poprawna (np. #f0565a) - przypisz odpowiedniemu elementowi wpisany kolor.
	if(checkColor(inpValue))
	{
		     if(inpId == 'colorPitch') pitchColor = inpValue;
		else if(inpId == 'colorNet')   netColor   = inpValue;
		else if(inpId == 'colorLines') linesColor = inpValue;
		else if(inpId == 'colorPadL')  padLColor  = inpValue;
		else if(inpId == 'colorPadR')  padRColor  = inpValue;
		else if(inpId == 'colorBall')  ballColor  = inpValue;
	}

	//Aktualizuj wyglad elementow w polu gry.
	drawPitch();
	drawPaddleLeft();
	drawPaddleRight();
	drawBall();
}