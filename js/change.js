//Zmien tryb gry.
const changeMode = e =>
{
	//Zmien tryb gry w zmiennej globalnej.
    mode = e.target.dataset.mode;

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
}

//Zmien poziom gracza komputerowego.
const changeModeCom = e =>
{
	//Zmien poziom gracza komputerowego w zmiennej globalnej.
	modeCom = e.target.dataset.modecom;
}

const changePaddleSpeed = () =>
{
	//Jesli przycik 'APPLY' w menu ustawien w opcji 'MODE' nie jest ukryty.
	if(!settModeBtn.classList.contains('applyButton--hidden'))
	{
		const inpPadL = parseFloat(inpSpeedPadL.value);
		const inpPadR = parseFloat(inpSpeedPadR.value);

		//Paletka lewa.
		if(!isNaN(inpPadL) && (inpPadL != padLSpeed))
		{
			//Jesli wprowadzona wartosc miesci sie w przedziale.
			if(inpPadL >= 1 && inpPadL <= canvasHeight) padLSpeed = inpPadL;
			else
			{
				//Jesli jest mniejsza niz dolna granica przedzialu.
				if(inpPadL < 1) padLSpeed = 1;
				//Jesli wieksza niz gorna granica.
				else if(inpPadL > canvasHeight) padLSpeed = canvasHeight;

				//Odswiez zawartosc inputa o prawidlowa wartosc (dolna lub gorna granice przedzialu).
				inpSpeedPadL.value = padLSpeed;
			}
		}

		//Paletka prawa.
		if(!isNaN(inpPadR) && (inpPadR != padRSpeed))
		{
			if(inpPadR >= 1 && inpPadR <= canvasHeight) padRSpeed = inpPadR;
			else
			{
				if(inpPadR < 1) padRSpeed = 1;
				else if(inpPadR > canvasHeight) padRSpeed = canvasHeight;

				inpSpeedPadR.value = padRSpeed;
			}
		}
	}
}

const changeBallSpeed = () =>
{
	const inpX = parseFloat(inpSpeedX.value);
	const inpY = parseFloat(inpSpeedY.value);
	const inpXIncr = parseFloat(inpSpeedXIncr.value);
	const inpYIncr = parseFloat(inpSpeedYIncr.value);

	if(!isNaN(inpX) && (inpX != ballXSpeedSet))
	{
		if(inpX >= -40 && inpX <= 40) ballXSpeedSet = inpX;
		else
		{
			if(inpX < -40) ballXSpeedSet = -40;
			else if(inpX > 40) ballXSpeedSet = 40;

			inpSpeedX.value = ballXSpeedSet;
		}

		ballXSpeed = ballXSpeedSet;

		if(ballXSpeed > 0 ) ballMoveRight = true;
		else ballMoveRight = false;

		changeBallPositionToCenter();
	}

	if(!isNaN(inpY) && (inpY != ballYSpeedSet))
	{
		if(inpY >= -40 && inpY <= 40) ballYSpeedSet = inpY;
		else
		{
			if(inpY < -40) ballYSpeedSet = -40;
			else if(inpY > 40) ballYSpeedSet = 40;

			inpSpeedY.value = ballYSpeedSet;
		}

		ballYSpeed = ballYSpeedSet;

		changeBallPositionToCenter();
	}

	if(!isNaN(inpXIncr) && (inpXIncr != ballXSpeedIncr))
	{
		if(inpXIncr >= 0 && inpXIncr <= 1) ballXSpeedIncr = inpXIncr;
		else
		{
			if(inpXIncr < 0) ballXSpeedIncr = 0;
			else if(inpXIncr > 1) ballXSpeedIncr = 1;

			inpSpeedXIncr.value = ballXSpeedIncr;
		}
	}

	if(!isNaN(inpYIncr) && (inpYIncr != ballYSpeedIncr))
	{
		if(inpYIncr >= 0 && inpYIncr <= 1) ballYSpeedIncr = inpYIncr;
		else
		{
			if(inpYIncr < 0) ballYSpeedIncr = 0;
			else if(inpYIncr > 1) ballYSpeedIncr = 1;

			inpSpeedYIncr.value = ballYSpeedIncr;
		}
	}
}

//Ustawi pilke na srodku boiska.
const changeBallPositionToCenter = () =>
{
	ballX = canvasWidth / 2 - ballSize / 2; 
	ballY = canvasHeight / 2 - ballSize / 2;
}

//Zmien wielkosc paletek i pilki.
const changeSize = () =>
{
	const inpPadL = parseFloat(inpHeightPadL.value);
	const inpPadR = parseFloat(inpHeightPadR.value);
	const inpBall = parseFloat(inpSizeBall.value);

	//Paletka lewa.
	if(!isNaN(inpPadL) && (inpPadL != padLHeight))
	{
		//Jesli wprowadzona wartosc miesci sie w przedziale.
		if(inpPadL >= 20 && inpPadL <= canvasHeight) padLHeight = inpPadL;
		else
		{
			//Jesli jest mniejsza niz dolna granica przedzialu.
			if(inpPadL < 20) padLHeight = 20;
			//Jesli wieksza niz gorna granica.
			else if(inpPadL > canvasHeight) padLHeight = canvasHeight;

			//Odswiez zawartosc inputa o prawidlowa wartosc (dolna lub gorna granice przedzialu).
			inpHeightPadL.value = padLHeight;
		}

		//Aby pilka po modyfikacji wielkosci paletek znajdowala sie na srodku pola gry (aby ktos nie zechcial zmodyfikowac wielkosc (a wiec i polozenie) paletki w miejscu, gdzie akurat polozona jest pilka).
		changeBallPositionToCenter();

		//Aby paletka po modyfikacji wielkosci nie wystawala pod dolna krawedz pola gry.
		if(padLY + padLHeight > canvasHeight) padLY = canvasHeight - padLHeight;
	}

	//Paletka prawa.
	if(!isNaN(inpPadR) && (inpPadR != padRHeight))
	{
		if(inpPadR >= 20 && inpPadR <= canvasHeight) padRHeight = inpPadR;
		else
		{
			if(inpPadR < 20) padRHeight = 20;
			else if(inpPadR > canvasHeight) padRHeight = canvasHeight;

			inpHeightPadR.value = padRHeight;
		}

		changeBallPositionToCenter();

		if(padRY + padRHeight > canvasHeight) padRY = canvasHeight - padRHeight;
	}

	//Pilka.
	if(!isNaN(inpBall) && (inpBall != ballSize))
	{
		console.log('pilka');
		if(inpBall >= 10 && inpBall <= canvasHeight) ballSize = inpBall;
		else
		{
			if(inpBall < 10) ballSize = 10;
			else if(inpBall > canvasHeight) ballSize = canvasHeight;

			inpSizeBall.value = ballSize;
		}

		//Aby pilka po modyfikacji jej wielkosci znajdowala sie na srodku pola gry (aby ktos nie zechcial zwiekszac pilki, ktora znajdowalaby sie przy krawedzi pola gry, co mogloby spowodowac ze czesc pilki zaczelaby wystawac poza pole gry)
		changeBallPositionToCenter(); 
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

inpColors.forEach(color =>
{
	color.addEventListener('input', changeColor);
});

radioModes.forEach(mode =>
{
    mode.addEventListener('click', changeMode);
});

radioModesCom.forEach(mode =>
{
	mode.addEventListener('click', changeModeCom);
});