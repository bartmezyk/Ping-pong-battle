const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//--------------------POLE GRY-----------------------
canvas.width = 1000; //Szerokosc pola gry (wartosci dobrane wg proporcji szerokosci i dlugosci standardowego stolu do tenisa stolowego).
canvas.height = 556; //Wysokosc ... .

const netWidth = 6; //Szerokosc pionowej siatki na srodku pola gry.

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
//-------------------------------------------


//-------------------PALETKA------------------------
//-----startowe-----
const paddleWidth = 20;

const paddleLeftHeightConst = 100; //Startowa wysokosc lewej paletki.
const paddleRightHeightConst = 100; //... prawej.

const paddleX = 70; //O ile paletki sa odsuniete od krotszych krawedzi canvas (lewa paletka od lewej krawedzi, a prawa od prawej).

//-----zmienne-----
let paddleLeftHeight = paddleLeftHeightConst; //Wysokosc lewej paletki zmienna w czasie gry.
let paddleRightHeight = paddleRightHeightConst; //... prawej.

let paddleLeftY = canvasHeight / 2 - paddleLeftHeight / 2; //O ile lewa paletka jest odsunieta od gornej krawedzi pola gry.
let paddleRightY = canvasHeight / 2 - paddleRightHeight / 2; //... prawa.
//-------------------------------------------


//---------------------KOLORY----------------------
//-----startowe-----
const pitchColorConst = '#000000'; //Startowy kolor boiska.
const netColorConst = '#FFFFFF'; //Startowy kolor siatki na srodku boiska (linia pionowa).
const lineColorConst = '#FFFFFF'; //Startowy kolor linii poziomej na srodku boiska.

const paddleLeftColorConst = '#FF0000'; //Startowy kolor paletki lewej.
const paddleRightColorConst = '#0000FF'; //... prawej.

//-----zmienne-----
let pitchColor = pitchColorConst; //Kolor boiska zmienny w czasie gry.
let netColor = netColorConst; //Kolor siatki zmienny w czasie gry.
let lineColor = lineColorConst; //Kolor linii poziomej zmienny w czasie gry.

let paddleLeftColor = paddleLeftColorConst; //Kolor paletki lewej zmienny w czasie gry.
let paddleRightColor = paddleRightColorConst; //... prawej.