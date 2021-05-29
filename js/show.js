//Zaktualizuj wynik.
const showScore = () =>
{
    infoScore.textContent = `Score: ${leftScore}:${rightScore}`;
}

//Zaktualizuj ilosc odbic od paletek.
const showBounce = ()  =>
{
	infoBounce.textContent = `Paddle bounce: ${bounceCounter}`;
	
	if(bounceCounter >= bounceBest)
	{
		bounceBest = bounceCounter;
		infoBounceBest.textContent = `Best paddle bounce: ${bounceBest}`;
	}
}