//Zmien kolory przyciskow w menu ustawien.
const settingMain = e =>
{
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
        if(index == e.target.dataset.key) content.classList.add('settingsContent--active');
    });
}

const settingMode = e =>
{
    settingMain(e);
}

const settingBallSpeed = e =>
{
    settingMain(e);
}

const settingSize = e =>
{
    settingMain(e);
}

const settingColor = e =>
{
    settingMain(e);
}

//Wstaw wartosci odpowiednich zmiennych do inputow w menu ustawien.
const settingInputsUpdate = () =>
{
    ;
}

document.querySelector('.btnMode').addEventListener('click', settingMode)
document.querySelector('.btnSpeed').addEventListener('click', settingBallSpeed)
document.querySelector('.btnSize').addEventListener('click', settingSize)
document.querySelector('.btnColor').addEventListener('click', settingColor)