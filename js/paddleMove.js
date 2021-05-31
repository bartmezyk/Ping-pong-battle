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

//Ruch myszki w polu gry.
canvas.addEventListener('mousemove', playerPaddleMove);