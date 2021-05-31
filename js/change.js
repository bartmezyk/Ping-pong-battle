const changeBallSpeed = () =>
{

}

//Zmien wielkosc paletek i pilki.
const changeSize = () =>
{
	const inpPadL = parseFloat(inpHeightPadL.value);
	const inpPadR = parseFloat(inpHeightPadR.value);
	const inpBall = parseFloat(inpSizeBall.value);

	//Paletka lewa.
	if(checkNumber(inpPadL, 20, canvasHeight))
	{  
		if(padLHeight != inpPadL) //Aby zmiana wielkosci paletki nastepowala tylko wtedy, gdy nowa wartosc rozni sie od aktualnie ustawionej.
		{
			padLHeight = inpPadL;
			
			padLY = 0; //Aby paletka po modyfikacji wielkosci przylegala do gornej krawedzi canvas (aby ktos nie zechcial wydluzac paletki ktora wystawalaby pod dolna krawedz canvas).
		}
	}

	//Paletka prawa.
	if(checkNumber(inpPadR, 20, canvasHeight))
	{  
		if(padRHeight != inpPadR)
		{
			padRHeight = inpPadR;
			
			padRY = 0;
		}
	}

	//Pilka.
	if(checkNumber(inpBall, 10, canvasHeight))
	{  
		if(inpBall != ballSize)
		{
			ballSize = inpBall;
			
			//Aby pilka po modyfikacji wielkosci znajdowala sie na srodku pola gry (aby ktos nie zechcial zwiekszac pilki, ktora znajdowalaby sie przy krawedzi pola gry, co mogloby spowodowac ze czesc pilki wystawalaby poza pole gry)
			ballX = canvasWidth / 2 - ballSize / 2; 
			ballY = canvasHeight / 2 - ballSize / 2;
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