const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//--------------------POLE GRY-----------------------
canvas.width = 1000; //Szerokosc pola gry (wartosci dobrane wg proporcji szerokosci i dlugosci standardowego stolu do tenisa stolowego).
canvas.height = 556; //...wysokosc

const netWidth = 6; //Szerokosc pionowej siatki na srodku pola gry.

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
//-------------------------------------------


//---------------------KOLORY----------------------
//-----startowe-----
const pitchColorConst = '#000000'; //Startowy kolor boiska.
const netColorConst = '#FFFFFF'; //Startowy kolor siatki na srodku boiska (linia pionowa).
const lineColorConst = '#FFFFFF'; //Startowy kolor linii poziomej na srodku boiska.

//-----zmienne-----
let pitchColor = pitchColorConst; //Kolor boiska zmienny w czasie gry.
let netColor = netColorConst; //Kolor siatki zmienny w czasie gry.
let lineColor = lineColorConst; //Kolor linii poziomej zmienny w czasie gry.