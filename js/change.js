//Zmien tryb gry.
const changeMode = e =>
{
	//Zmien tryb gry w zmiennej globalnej.
    mode = e.target.dataset.mode;
	console.log(mode);

	//Zmien zawartosc w prawej czesci komtentu w menu ustawien w zaleznosci od wybranego radioboxa (poprzez nadanie lub zabranie klasy).
	if(mode == 0)
	{
		settContRightSin.classList.add('settingsContent__right--deactive');
		settContRightMul.classList.add('settingsContent__right--deactive');
	}
	if(mode == 1)
	{
		settContRightMul.classList.add('settingsContent__right--deactive');
		settContRightSin.classList.remove('settingsContent__right--deactive');
	}
	else if(mode == 2)
	{
		settContRightSin.classList.add('settingsContent__right--deactive');
		settContRightMul.classList.remove('settingsContent__right--deactive');
	}
}

//Zmien poziom gracza komputerowego.
const changeModeCom = e =>
{
	//Zmien poziom gracza komputerowego w zmiennej globalnej.
	modeCom = e.target.dataset.modecom;
}

const changeBallSpeed = () =>
{

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