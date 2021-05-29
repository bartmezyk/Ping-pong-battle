//Odswiez pole gry i znajdujacie sie na nich elementy.
const game = () =>
{
    drawPitch();
    ballMove();
    drawPaddleLeft();
    drawPaddleRight();
}

setInterval(game, 1000/60); //60 razy na sekunde pole gry odswiezane.