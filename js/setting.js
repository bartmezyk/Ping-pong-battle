//Zmien zawartosc i wyglad w menu ustawien po kliknieciu ktoregos z 4 przyciskow ustawien.
const settingMain = e =>
{
    if(e === undefined) settingChoose = 0; //Jesli nie podeslano argumentu eventu to uznaj, ze wybrano przycisk pierwszy, czyli 'MODE'.
    else settingChoose = e.target.dataset.key; //Zmienna wskazuje, ktory przycisk w menu ustawien zostal wybrany.

    //Usuniecie koloru aktywnego ze wszystkich przyciskow wyboru w menu ustawien (czyli rowniez z tego, ktory go mial) (poprzez usuniecie klasy).
    chooseButtons.forEach(button =>
    {
        button.classList.remove('chooseButton--active');
    });

    chooseButtons[settingChoose].classList.add('chooseButton--active'); //Nadanie koloru aktywnego na przycisk wlasnie klikniety (e.target) (poprzez nadanie klasy).


    //Wstawienie odpowiedniej dla kliknietego przycisku zawartosci do diva o klasie 'settingsContent' w menu ustawien.
    settingsContents.forEach((content, index) =>
    {
        content.classList.remove('settingsContent--active'); //Usuniecie zawartosci ze wszystkich divow (czyli rowniez z tego, ktory ja mial) (poprzez usuniecie klasy).

        //Nadanie zawartosci divowi o atrybucie 'key' takim samym, jak atrybutu 'key' kliknietego przycisku (poprzez nadanie klasy).
        if(index == settingChoose) content.classList.add('settingsContent--active');
    });

    //Aktualizuj inputy poprzez wstawienie do nich wartosci odpowiednich zmiennych.
    inputsSet();
}

//Wywolaj odpowiednie funkcje po kliknieciu przycisku 'APPLY' w menu ustawien.
const settingApply = () =>
{
    if(settingChoose == 0) changePaddleSpeed();
    else if(settingChoose == 1) changeBallSpeed();
    else if(settingChoose == 2) changeSize();
    else console.error(`Wrong value in "settingChoose" variable: ${settingChoose}.`);
}

inputsSet();

chooseButtons.forEach(button =>
{
    button.addEventListener('click', settingMain);
});

applyButtons.forEach(button =>
{
    button.addEventListener('click', settingApply);
});