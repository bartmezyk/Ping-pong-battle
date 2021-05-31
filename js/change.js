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

			//Aby pilka po modyfikacji wielkosci paletek znajdowala sie na srodku pola gry (aby ktos nie zechcial zmodyfikowac wielkosc (a wiec i polozenie) paletki w miejscu, gdzie akurat polozona jest pilka).
			changeBallPositionToCenter();
		}

		padLY = 0; //Aby paletka po modyfikacji wielkosci przylegala do gornej krawedzi canvas (aby ktos nie zechcial wydluzac paletki ktora wystawalaby pod dolna krawedz canvas).
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

			changeBallPositionToCenter();
		}

		padRY = 0;
	}

	//Pilka.
	if(!isNaN(inpBall) && (inpBall != ballSize))
	{
		if(inpBall >= 10 && inpBall <= canvasHeight) ballSize = inpBall;
		else
		{
			if(inpBall < 10) ballSize = 10;
			else if(inpBall > canvasHeight) ballSize = canvasHeight;

			inpBall.value = ballSize;

			//Aby pilka po modyfikacji jej wielkosci znajdowala sie na srodku pola gry (aby ktos nie zechcial zwiekszac pilki, ktora znajdowalaby sie przy krawedzi pola gry, co mogloby spowodowac ze czesc pilki zaczelaby wystawac poza pole gry)
			changeBallPositionToCenter(); 
		}
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
	if(checkColor(inputValue))
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