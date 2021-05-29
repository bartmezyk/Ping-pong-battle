//Odswiez pole gry i znajdujace sie na nim elementy.
const game = () =>
{
    drawPitch();
    ballMove();
    drawPaddleLeft();
    drawPaddleRight();
}

//60 razy na sekunde pole gry odswiezane.
setInterval(game, 1000/60);