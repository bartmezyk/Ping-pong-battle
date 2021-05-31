const changeBallSpeed = () =>
{

}

const changeSize = () =>
{

}

//Zmien kolory w polu gry.
const changeColor = e =>
{
	const inputId = e.target.id;
	const inputValue = e.target.value; 
	
	//Jesli nazwa koloru wpisana w inpucie koloru jest poprawna (np. #f0565a) - przypisz odpowiedniemu elementowi wpisany kolor.
	if(checkColor(inputValue))
	{
		     if(inputId == 'colorPitch') pitchColor = inputValue;
		else if(inputId == 'colorNet')   netColor   = inputValue;
		else if(inputId == 'colorLines') linesColor = inputValue;
		else if(inputId == 'colorPadL')  padLColor  = inputValue;
		else if(inputId == 'colorPadR')  padRColor  = inputValue;
		else if(inputId == 'colorBall')  ballColor  = inputValue;
	}

	//Rysuj elementy w polu gry.
	drawPitch();
	drawPaddleLeft();
	drawPaddleRight();
	drawBall();
}

inpColors.forEach(color =>
{
	color.addEventListener('input', changeColor);
});