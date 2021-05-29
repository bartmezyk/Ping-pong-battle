//Zaktualizuj wynik.
const showScore = () =>
{
    infoScore.textContent = `Score: ${leftScore}:${rightScore}`;
}

//Zaktualizuj ilosc odbic od paletek.
const showBounce = ()  =>
{
	infoBounce.textContent = `Paddle bounce: ${bounceCounter}`; //Ilosc odbic w aktualnej rozgrywce.
	
	if(bounceCounter >= bounceBest)
	{
		bounceBest = bounceCounter;
		infoBounceBest.textContent = `Best paddle bounce: ${bounceBest}`; //Najwieksza ilosc odbic podczas pojedynczego zaladowania strony.
	}
}

//Zaktualizuj predkosc pilki.
const showSpeed = () =>
{
	let speed = (Math.sqrt(Math.pow(ballXSpeed, 2) + Math.pow(ballYSpeed, 2))).toPrecision(3); //Polaczenie predkosci wzdluz osi X z predkoscia wzdluz osi Y.
	
	infoSpeed.textContent = `Ball speed: ${speed}`; //Aktualna predkosc pilki.
	
	if (parseFloat(speed) > parseFloat(speedBest))
	{
		speedBest = speed;
		infoSpeedBest.textContent = `Best ball speed: ${speedBest}`; //Maksymalna predkosci pilki podczas pojedynczego zaladowania strony.
	}
}