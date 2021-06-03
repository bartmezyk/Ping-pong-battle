//Ustaw graniczne wartosci dopuszczalne w inputach.
const prepareInputs = () =>
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

prepareInputs();

