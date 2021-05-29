const settingMain = e =>
{
    chooseButtons.forEach(button =>
    {
        button.classList.remove('chooseButton--active');
    });

    e.target.classList.add('chooseButton--active');
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