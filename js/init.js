//Inicjalizuj rozgrywke.
const init = () =>
{
    //60 razy na sekunde pole gry odswiezane.
    setInterval(gameRefresh, 1000/60);

    //Wyswietl informacje o rozgrywce.
    showScore();
    showBounce();
    showSpeed();

    //Ruch myszki w polu gry.
    canvas.addEventListener('mousemove', playerPaddleMove);

    //Klikniecie klawisza na klawiaturze.
    window.addEventListener('keydown', keyDown);

    //Ustawienie nasluchiwania na przyciski i inputy kolorow w menu ustawien.
    chooseButtons.forEach(button => button.addEventListener('click', settingMain));
    radioModes.forEach(mode => mode.addEventListener('click', changeMode));
    radioModesCom.forEach(mode => mode.addEventListener('click', changeModeCom));
    applyButtons.forEach(button => button.addEventListener('click', settingApply));
    inpColors.forEach(color => color.addEventListener('input', changeColor));
    scoreResetButton.addEventListener('click', resetScore);
    settingsResetButton.addEventListener('click', resetSetting);

    //Automatycznie ustawiajacy sie aktualny rok w footerze glownym.
    mainFooter.innerHTML = `Bartosz Mężyk ${year} &copy; Wszelkie prawa zastrzeżone.`;

    //Wstaw wartosci odpowiednich zmiennych do inputow w menu ustawien.
    inputsSet();

    //Ustaw graniczne wartosci dopuszczalne w inputach.
    inputsPrepare();
}

init();