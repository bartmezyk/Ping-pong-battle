//Zmien zawartosc i wyglad w menu ustawien po kliknieciu ktoregos z 4 przyciskow ustawien
const settingMain = e =>
{
    settingChoose = e.target.dataset.key; //Zmienna wskazuje, ktory przycisk w menu ustawien zostal wybrany.

    //Usuniecie koloru aktywnego ze wszystkich przyciskow wyboru w menu ustawien (czyli rowniez z tego, ktory go mial) (poprzez usuniecie klasy).
    chooseButtons.forEach(button =>
    {
        button.classList.remove('chooseButton--active');
    });

    e.target.classList.add('chooseButton--active'); //Nadanie koloru aktywnego na przycisk wlasnie klikniety (e.target) (poprzez nadanie klasy).


    //Wstawienie odpowiedniej dla kliknietego przycisku zawartosci do diva o klasie 'settingsContent' w menu ustawien.
    settingsContents.forEach((content, index) =>
    {
        content.classList.remove('settingsContent--active'); //Usuniecie zawartosci ze wszystkich divow (czyli rowniez z tego, ktory ja mial) (poprzez usuniecie klasy).

        //Nadanie zawartosci divowi o atrybucie 'key' takim samym, jak atrybutu 'key' kliknietego przycisku (poprzez nadanie klasy).
        if(index == settingChoose) content.classList.add('settingsContent--active');
    });
}

const settingApply = () =>
{
    if(settingChoose == 1) changeBallSpeed();
    else if(settingChoose == 2) changeSize();
    else if(settingChoose == 3) changeColor();
    else throw new Error(`Wrong value in "settingChoose" variable: ${settingChoose}`);
}

//Wstaw wartosci odpowiednich zmiennych do inputow w menu ustawien.
const settingInputsUpdate = () =>
{
    inpSpeedPadL.value = padLSpeed;
    inpSpeedPadR.value = padRSpeed;

    inpSpeedX.value = ballXSpeed;
    inpSpeedY.value = ballYSpeed;
    inpSpeedXIncr.value = ballXSpeedIncr;
    inpSpeedYIncr.value = ballYSpeedIncr;
    inpSpeedXMax.value = ballXSpeedMax;
    inpSpeedYMax.value = ballYSpeedMax;

    inpHeightPadL.value = padLHeight;
    inpHeightPadR.value = padRHeight;
    inpSizeBall.value = ballSize;

    inpColorPitch.value = pitchColor;
    inpColorNet.value = netColor;
    inpColorLines.value = linesColor;
    inpColorPadL.value = padLColor;
    inpColorPadR.value = padRColor;
    inpColorBall.value = ballColor;
}

settingInputsUpdate();

chooseButtons.forEach(button =>
{
    button.addEventListener('click', settingMain);
});

applyButtons.forEach(button =>
{
    button.addEventListener('click', settingApply);
});