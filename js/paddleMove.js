//Nadaj wspolrzedne paletce (lewej badz prawej) poruszanej przez gracza.
const playerPaddleMove = e =>
{
    //Jesli tryb gry inny niz multiplayer.
    if(mode != 2)
    {
        //Single player bez komputera.
        if(mode == 0)
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

            //Jesli paletka gracza prawego wyjdzie poza pole gry na dole.
            if(padRY + padRHeight >= canvasHeight) 
            {
                padRY = canvasHeight - padRHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
            }
            //... na gorze.
            else if(padRY <= 0) padRY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.
         }
        //Single player z komputerem (ruch myszki na calej przestrzeni pola gry umozliwia ruch paletki lewej).
        else if(mode == 1) padLY = e.clientY - canvas.offsetTop - padLHeight / 2;
        
        //Jesli paletka gracza lewego wyjdzie poza pole gry na dole.
        if(padLY + padLHeight >= canvasHeight) 
        {
            padLY = canvasHeight - padLHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
        }
        //... na gorze.
        else if(padLY <= 0) padLY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.
    }
}

//Nadaj wspolrzedne paletce prawej poruszanej przez komputer.
const computerPaddleMove = () =>
{
    let comPadSpeed;

    //Jak szybko ma poruszac sie paletka gracza komputerowego (w zaleznosci od wybranego poziomu trudnosci).
    if(modeCom == 0) comPadSpeed = comEasyLev;
    else if(modeCom == 1) comPadSpeed = comMediumLev;
    else if(modeCom == 2) comPadSpeed = comHardLev;

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