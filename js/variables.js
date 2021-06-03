const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//-------------------- POLE GRY -----------------------
canvas.width = 1000; //Szerokosc pola gry (wartosci dobrane wg proporcji szerokosci i dlugosci standardowego stolu do tenisa stolowego).
canvas.height = 556; //Wysokosc ...

const netWidth = 6; //Szerokosc pionowej siatki na srodku pola gry.

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
//-------------------------------------------


//------------------- PALETKA ------------------------
//----- wartosci startowe -----
const padWidth = 20;

const padLHeightConst = 100; //Startowa wysokosc paletki lewej.
const padRHeightConst = 100; //... prawej.
const padHeightMin = 20; //Minimalna  ustawialna wysokosc paletek.

const padX = 70; //O ile paletki sa odsuniete od krotszych krawedzi canvas (lewa paletka od lewej krawedzi, a prawa od prawej).

const padLSpeedConst = 50; //Startowa wartosc o jaka przesuwa sie lewa paletka w trybie multiplayer po jednorazowym wcisnieciu klawisza.
const padRSpeedConst = 50; //... prawa ...

//----- wartosci zmienne -----
let padLHeight = padLHeightConst; //Wysokosc paletki lewej.
let padRHeight = padRHeightConst; //... prawej.

let padLY = canvasHeight / 2 - padLHeight / 2; //O ile lewa paletka jest odsunieta od gornej krawedzi pola gry.
let padRY = canvasHeight / 2 - padRHeight / 2; //... prawa ...

let padLSpeed = padLSpeedConst; //Wartosc o jaka przesuwa sie lewa paletka w trybie multiplayer po jednorazowym wcisnieciu klawisza.
let padRSpeed = padRSpeedConst; //... prawa ...
//-------------------------------------------


//----------------- PILKA --------------------------
//----- wartosci startowe -----
const ballSizeConst = 20; //Startowa dlugosc boku kwadratu 'pilki'
const ballSizeMin = 10; //Minimalna  ustawialna dlugosc boku kwadratu 'pilki'.

const ballXSpeedConst = 5; //Startowa predkosc pilki wzdluz osi X.
const ballYSpeedConst = 5; //... osi Y.

const ballXSpeedIncrConst = .1; //Startowa wartosc o jaka zwiekszac ma sie predkosc pilki po odbiciu od scian boiska i od paletek wzdluz osi X.
const ballYSpeedIncrConst = .1; //... osi Y.

const ballXSpeedMax = 40; //Maksymalna ustawialna wartosc predkosci poruszania sie pilki wzdluz osi X.
const ballYSpeedMax = 40; //... osi Y.

const ballXSpeedIncrMax = 1; //Maksymalna ustawialna wartosc o jaka zwiekszac ma sie predkosc pilki po odbiciu od scian boiska i od paletek wzdluz osi X.
const ballYSpeedIncrMax = 1; //... osi Y.

//----- wartosci zmienne -----
let ballSize = ballSizeConst; //Dlugosc boku kwadratu 'pilki'.

let ballX = canvasWidth/2 - ballSize/2; //Polozenie lewego gornego rogu 'pilki' wzdluz osi X (na poczatku gry pilka jest dokladnie na srodku boiska).
let ballY = canvasHeight/2 - ballSize/2; //... osi Y.

let ballMoveRight = true; //Pilka porusza sie w prawo (true).

let ballXSpeed = ballXSpeedConst; //Rzeczywista predkosc pilki wzdluz osi X.
let ballYSpeed = ballYSpeedConst; //... osi Y.

let ballXSpeedSet = ballXSpeedConst; //Predkosc pilki wzdluz osi X po wpisaniu przez gracza.
let ballYSpeedSet = ballYSpeedConst; //... osi Y.

let ballXSpeedIncr = ballXSpeedIncrConst; //Wartosc o jaka zwiekszac ma sie predkosc pilki po odbiciu od scian boiska i od paletek wzdluz osi X.
let ballYSpeedIncr = ballYSpeedIncrConst; //... osi Y.
//-------------------------------------------


//--------------------- OPCJE WYBIERANE ----------------------
let mode = 0; /*Jesli mode = 0 - tryb single player bez komputera (wybierany radioboxem).
					  mode = 1 - ... z komputerem ("comMode" ponizej).
					  mode = 2 - tryb multiplayer. */

let modeCom = 0; /* Jesli comMode = 0 - tryb easy komputera (wybierany radioboxem).
						  comMode = 1 - ... medium ...
						  comMode = 2 - ... hard ... */

let settingChoose = 0; /* Jesli settingChoose = 0 - w menu ustawien wybrana opcja MODE.
								 settingChoose = 1 - ... BALL SPEED.
								 settingChoose = 2 - ... SIZE.
								 settingChoose = 3 - ... COLOR. */
//-------------------------------------------


//--------------------- KOLORY ----------------------
//----- wartosci startowe -----
const pitchColorConst = '#000000'; //Startowy kolor boiska.
const netColorConst = '#ffffff'; //Startowy kolor siatki na srodku boiska (linia pionowa).
const lineColorConst = '#ffffff'; //Startowy kolor linii poziomej na srodku boiska.

const padLColorConst = '#ff0000'; //Startowy kolor paletki lewej.
const padRColorConst = '#0000ff'; //... prawej.
const ballColorConst = '#ff9100'; //Startowy kolor pilki.

//----- wartosci zmienne -----
let pitchColor = pitchColorConst; //Kolor boiska.
let netColor = netColorConst; //Kolor siatki.
let linesColor = lineColorConst; //Kolor linii poziomej.

let padLColor = padLColorConst; //Kolor paletki lewej.
let padRColor = padRColorConst; //... prawej.
let ballColor = ballColorConst; //Kolor pilki.
//-------------------------------------------


//-------------------GRACZ KOMPUTEROWY------------------------
const comEasyLev = 5; //Poziom trudnosci komputera latwy.
const comMediumLev = 10; //... sredni.
const comHardLev = 15; //... trudny.
//-------------------------------------------


//------------------- WYNIKI ------------------------
let leftScore = 0; //Wynik paletki lewej (ile razy wygrala).
let rightScore = 0; //... prawej ...

let speedBest = 0; //Maksymalna predkosc pilki podczas pojedynczego zaladowania strony.

let bounceCounter = 0; //Ilosc odbic pilki od paletek w pojedynczej rozgrywce.
let bounceBest = 0; //Najwieksza ilosc odbic pilki od paletek podczas pojedynczego zaladowania strony.
//-------------------------------------------


//------------------- INNE ------------------------
let pauseGame = false; //Mozliwosc zatrzymania gry (klikajac klawisz 't').
const year = new Date().getFullYear();

const infoScore      = document.querySelector('.info__score');
const infoSpeed      = document.querySelector('.info__speed');
const infoSpeedBest  = document.querySelector('.info__speedBest');
const infoBounce     = document.querySelector('.info__bounce');
const infoBounceBest = document.querySelector('.info__bounceBest');

const settModeRightSin = document.querySelector('.settings__area > div.settingsContent[data-key="0"] > .settingsContent__right:nth-last-child(3)');
const settModeRightMul = document.querySelector('.settings__area > div.settingsContent[data-key="0"] > .settingsContent__right:nth-last-child(2)');
const settModeBtn = document.querySelector('.settings__area > div.settingsContent[data-key="0"] > .applyButton:nth-last-child(1)');

const chooseButtons = document.querySelectorAll('.chooseButton');

const settingsContents = document.querySelectorAll('.settingsContent');

const applyButtons = document.querySelectorAll('.applyButton');

const scoreResetButton = document.querySelector('.score__reset');
const settingsResetButton = document.querySelector('.settings__reset');

const mainFooter = document.querySelector('.mainFooter');

//----- radioboxy -----
const radioModes = document.querySelectorAll('.mode');

const radioModesCom = document.querySelectorAll('.modeCom');

//----- inputy -----
const inpSpeedPadL = document.getElementById('speedPadL');
const inpSpeedPadR = document.getElementById('speedPadR');

const inpSpeedX = document.getElementById('speedX');
const inpSpeedY = document.getElementById('speedY');
const inpSpeedXIncr = document.getElementById('speedXIncr');
const inpSpeedYIncr = document.getElementById('speedYIncr');

const inpHeightPadL = document.getElementById('heightPadL');
const inpHeightPadR = document.getElementById('heightPadR');
const inpSizeBall = document.getElementById('sizeBall');

const inpColors = document.querySelectorAll('.inpColor');

const inpColorPitch = document.getElementById('colorPitch');
const inpColorNet = document.getElementById('colorNet');
const inpColorLines = document.getElementById('colorLines');
const inpColorPadL = document.getElementById('colorPadL');
const inpColorPadR = document.getElementById('colorPadR');
const inpColorBall = document.getElementById('colorBall');
//-------------------------------------------
