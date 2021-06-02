//Zwieksz predkosc pilki.
const speedUp = () =>
{
	if((ballXSpeed > 0) && (ballXSpeed < ballXSpeedMax)) ballXSpeed += ballXSpeedIncr;
	else if((ballXSpeed < 0) && (ballXSpeed > -ballXSpeedMax)) ballXSpeed -= ballXSpeedIncr;
		
	if((ballYSpeed > 0) && (ballYSpeed < ballYSpeedMax)) ballYSpeed += ballYSpeedIncr;
	else if((ballYSpeed < 0) && (ballYSpeed > -ballYSpeedMax)) ballYSpeed -= ballYSpeedIncr;	

    //Zaktualizuj predkosc pilki.
	showSpeed();
}