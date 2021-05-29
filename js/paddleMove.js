const playerPaddleMove = e =>
{
    //Ruch myszki na lewej polowie pola gry umozliwia ruch paletki lewej.
    if(e.clientX - canvas.offsetLeft < canvasWidth / 2) 
    {
        paddleLeftY = e.clientY - canvas.offsetTop - paddleLeftHeight / 2;
    }
    //... prawej ... prawej.
    else 
    {
        paddleRightY = e.clientY - canvas.offsetTop - paddleRightHeight / 2;
    }
    
    //Jesli paletka gracza lewego wyjdzie poza pole gry na dole.
    if(paddleLeftY + paddleLeftHeight >= canvasHeight) 
    {
        paddleLeftY = canvasHeight - paddleLeftHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
    }
    //... na gorze.
    else if(paddleLeftY <= 0) paddleLeftY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.

    //Jesli paletka gracza prawego wyjdzie poza pole gry na dole.
    if(paddleRightY + paddleRightHeight >= canvasHeight) 
    {
        paddleRightY = canvasHeight - paddleRightHeight; //Zatrzymaj paletke przy dolnej krawedzi pola gry.
    }
    //... na gorze.
    else if(paddleRightY <= 0) paddleRightY = 0; //Zatrzymaj paletke przy gornej krawedzi pola gry.
}

//Ruch myszki w polu gry.
canvas.addEventListener('mousemove', playerPaddleMove);