//Ustaw graniczne wartosci dopuszczalne w inputach.
const inputsPrepare = () =>
{
    //Predkosc paletek.
    inpSpeedPadL.min = 1;
    inpSpeedPadL.max = canvasHeight;
    inpSpeedPadR.min = 1;
    inpSpeedPadR.max = canvasHeight;

    //Predkosc startowa pilki.
    inpSpeedX.min = -ballXSpeedMax;
    inpSpeedX.max =  ballXSpeedMax;
    inpSpeedY.min = -ballYSpeedMax;
    inpSpeedY.max =  ballYSpeedMax;

    //Predkosc dodawana pilki.
    inpSpeedXIncr.min = 0;
    inpSpeedXIncr.max = ballXSpeedIncrMax;
    inpSpeedYIncr.min = 0;
    inpSpeedYIncr.max = ballYSpeedIncrMax;

    //Wielkosc paletek i pilki.
    inpHeightPadL.min = padHeightMin;
    inpHeightPadL.max = canvasHeight;
    inpHeightPadR.min = padHeightMin;
    inpHeightPadR.max = canvasHeight;
    inpSizeBall.min = ballSizeMin;
    inpSizeBall.max = canvasHeight;
}

//Wstaw wartosci odpowiednich zmiennych do inputow w menu ustawien.
const inputsSet = () =>
{
    //Predkosc paletek.
    inpSpeedPadL.value = padLSpeed;
    inpSpeedPadR.value = padRSpeed;

    //Predkosc startowa pilki.
    inpSpeedX.value = ballXSpeedStart;
    inpSpeedY.value = ballYSpeedStart;

    //Predkosc dodawana pilki.
    inpSpeedXIncr.value = ballXSpeedIncr;
    inpSpeedYIncr.value = ballYSpeedIncr;

    //Wielkosc paletek i pilki.
    inpHeightPadL.value = padLHeight;
    inpHeightPadR.value = padRHeight;
    inpSizeBall.value = ballSize;

    //Kolory elementow w polu gry.
    inpColorPitch.value = pitchColor;
    inpColorNet.value = netColor;
    inpColorLines.value = linesColor;
    inpColorPadL.value = padLColor;
    inpColorPadR.value = padRColor;
    inpColorBall.value = ballColor;
}

