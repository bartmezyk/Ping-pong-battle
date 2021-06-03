//Wykonaj czynnosci po kliknieciu klawisza na klawiaturze.
const keyDown = e =>
{
    //Pauza lub wznowienie gry po kliknieciu klawisza 't'.
    if(e.key == 't' || e.key == 'T') pauseGame = !pauseGame;
	
    //Jesli wybrany tryb to multiplayer - poruszaj paletkami.
	if(mode == 2 && !pauseGame)
	{
        //Paletka lewa w gore po kliknieciu 'q'.
        if(e.key == 'q' || e.key == 'Q') padLY -= padLSpeed;
        //... w dol po kliknieciu 'a'.
        else if(e.key == 'a' || e.key == 'A') padLY += padLSpeed;
        
        //Paletka prawa w gore po kliknieciu '['.
        if(e.key == '[') padRY -= padRSpeed;
        //... w dol po kliknieciu '''.
        else if(e.key == '\'') padRY += padRSpeed;
        
        //Jesli paletka lewa wyjdzie poza pole gry na dole.
        if(padLY + padLHeight >= canvasHeight) padLY = canvasHeight - padLHeight;
        else if(padLY <= 0) padLY = 0;  //... na gorze.
    
        //Jesli paletka prawa wyjdzie poza pole gry na dole.
        if(padRY + padRHeight >= canvasHeight) padRY = canvasHeight - padRHeight;
        else if(padRY <= 0) padRY = 0; //... na gorze.
	}
}