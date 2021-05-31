//Nadaj wspolrzedne paletce (lewej badz prawej) poruszanej przez gracza.
const playerPaddleMove = e =>
{
    //Ruch myszki na lewej polowie pola gry umozliwia ruch paletki lewej.
    if(e.clientX - canvas.offsetLeft < canvasWidth / 2) 
    {
        padLY = e.clientY - canvas.offsetTop - padLHeight / 2;
    }
    //... prawej ... prawej.
    else 
    {
        padRY = e.clientY - canvas.offsetTop - padRHeight / 2;
    }
    
    //Jesli paletka gracza lewego wyjdzie poza pole gry na dole.
    if(padLY + padLHeight >= canvasHeight) 
    {
        padLY = canvasHeight - padLHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
    }
    //... na gorze.
    else if(padLY <= 0) padLY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.

    //Jesli paletka gracza prawego wyjdzie poza pole gry na dole.
    if(padRY + padRHeight >= canvasHeight) 
    {
        padRY = canvasHeight - padRHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
    }
    //... na gorze.
    else if(padRY <= 0) padRY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.
}

//Nadaj wspolrzedne paletce prawej poruszanej przez komputer.
const computerPaddleMove = () =>
{
    let comPadSpeed;

    //Jak szybko ma poruszac sie paletka gracza komputerowego (w zaleznosci od wybranego poziomu trudnosci).
    if(comMode == 0) comPadSpeed = comEasyLev;
    else if(comMode == 1) comPadSpeed = comMediumLev;
    else if(comMode == 2) comPadSpeed = comHardLev;

    //Nadawanie wspolrzednych.
    if(ballMoveRight == true)
    {
        if((padRY + padRHeight / 2) < (ballY + ballSize / 2)) padRY += comPadSpeed;
        else padRY -= comPadSpeed;
    }
    else 
    {
        if((padRY + padRHeight / 2) < canvasHeight / 2) padRY += comPadSpeed;
        else if ((padRY + padRHeight / 2) > (canvasHeight / 2 + comPadSpeed)) padRY -= comPadSpeed;
    }

    //Jesli paletka prawa wyjdzie poza pole gry na dole.
	if(padRY + padRHeight >= canvasHeight) padRY = canvasHeight - padRHeight;
    //...na gorze.
	else if(padRY <= 0) padRY = 0;
}

//Ruch myszki w polu gry.
canvas.addEventListener('mousemove', playerPaddleMove);