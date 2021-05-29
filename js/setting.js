//Zmien kolory przyciskow w menu ustawien.
const settingMain = e =>
{
    //Zabranie ze wszystkich przyciskow koloru aktywnego (czyli rowniez z tego, ktory go mial) (poprzez usuniecie klasy).
    chooseButtons.forEach(button =>
    {
        button.classList.remove('chooseButton--active');
    });

    e.target.classList.add('chooseButton--active'); //Nadanie koloru aktywnego na przycisk wlasnie klikniety (e.target) (poprzez nadanie klasy).
}

const settingMode = e =>
{
    settingMain(e);
}

const settingSpeed = e =>
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

document.querySelector('.btnMode').addEventListener('click', settingMode)
document.querySelector('.btnSpeed').addEventListener('click', settingSpeed)
document.querySelector('.btnSize').addEventListener('click', settingSize)
document.querySelector('.btnColor').addEventListener('click', settingColor)