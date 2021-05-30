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
const paddleWidth = 20;

const paddleLeftHeightConst = 100; //Startowa wysokosc lewej paletki.
const paddleRightHeightConst = 100; //... prawej.

const paddleX = 70; //O ile paletki sa odsuniete od krotszych krawedzi canvas (lewa paletka od lewej krawedzi, a prawa od prawej).

//----- wartosci zmienne -----
let paddleLeftHeight = paddleLeftHeightConst; //Wysokosc lewej paletki zmienna w czasie gry.
let paddleRightHeight = paddleRightHeightConst; //... prawej.

let paddleLeftY = canvasHeight / 2 - paddleLeftHeight / 2; //O ile lewa paletka jest odsunieta od gornej krawedzi pola gry.
let paddleRightY = canvasHeight / 2 - paddleRightHeight / 2; //... prawa.
//-------------------------------------------


//----------------- PILKA --------------------------
//----- wartosci startowe -----
const ballSizeConst = 20; //Startowa dlugosc boku kwadratu 'pilki'

const ballXSpeedConst = 5; //Startowa predkosc pilki wzdluz osi X.
const ballYSpeedConst = 5; //... wzdluz osi Y.

//----- wartosci zmienne -----
let ballSize = ballSizeConst; //Dlugosc boku kwadratu 'pilki' zmienna w czasie gry.

let ballX = canvasWidth/2 - ballSize/2; //Polozenie lewego gornego rogu 'pilki' wzdluz osi X (na poczatku gry pilka jest dokladnie na srodku boiska).
let ballY = canvasHeight/2 - ballSize/2; //... wzdluz osi Y.

let ballXSpeed = ballXSpeedConst; //Rzeczywista predkosc pilki wzdluz osi X zmienna w czasie gry.
let ballYSpeed = ballYSpeedConst; //... wzdluz osi Y.

let ballMoveRight = true; //Pilka porusza sie w prawo (true).
//-------------------------------------------


//--------------------- KOLORY ----------------------
//----- wartosci startowe -----
const pitchColorConst = '#000000'; //Startowy kolor boiska.
const netColorConst = '#FFFFFF'; //Startowy kolor siatki na srodku boiska (linia pionowa).
const lineColorConst = '#FFFFFF'; //Startowy kolor linii poziomej na srodku boiska.

const paddleLeftColorConst = '#FF0000'; //Startowy kolor paletki lewej.
const paddleRightColorConst = '#0000FF'; //... prawej.

const ballColorConst = '#ff9100'; //Startowy kolor pilki.

//----- wartosci zmienne -----
let pitchColor = pitchColorConst; //Kolor boiska zmienny w czasie gry.
let netColor = netColorConst; //Kolor siatki zmienny w czasie gry.
let lineColor = lineColorConst; //Kolor linii poziomej zmienny w czasie gry.

let paddleLeftColor = paddleLeftColorConst; //Kolor paletki lewej zmienny w czasie gry.
let paddleRightColor = paddleRightColorConst; //... prawej.

let ballColor = ballColorConst; //Kolor pilki zmienny w czasie gry.
//-------------------------------------------


//------------------- WYNIKI ------------------------
let leftScore = 0; //Wynik paletki lewej (ile razy wygrala).
let rightScore = 0; //... prawej ...

let speedBest = 0; //Maksymalna predkosc pilki podczas pojedynczego zaladowania strony.

let bounceCounter = 0; //Ilosc odbic pilki od paletek w pojedynczej rozgrywce.
let bounceBest = 0; //Najwieksza ilosc odbic pilki od paletek podczas pojedynczego zaladowania strony.
//-------------------------------------------


//------------------- INNE ------------------------
const infoScore      = document.querySelector('.info__score');
const infoSpeed      = document.querySelector('.info__speed');
const infoSpeedBest  = document.querySelector('.info__speedBest');
const infoBounce     = document.querySelector('.info__bounce');
const infoBounceBest = document.querySelector('.info__bounceBest');

const chooseButtons = document.querySelectorAll('.chooseButton');

const settingsContents = document.querySelectorAll('.settingsContent');
//-------------------------------------------
