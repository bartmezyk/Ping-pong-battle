const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//--------------------POLE GRY-----------------------
canvas.width = 1000; //szerokosc pola gry (wartosci dobrane wg proporcji szerokosci i dlugosci standardowego stolu do tenisa stolowego)
canvas.height = 556; //...wysokosc

const netWidth = 6; //szerokosc pionowej siatki na srodku pola gry

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
//-------------------------------------------


//---------------------KOLORY----------------------
//-----startowe-----
const pitchColorConst = '#000000'; //startowy kolor boiska
const netColorConst = '#FFFFFF'; //startowy kolor siatki na srodku boiska (linia pionowa)
const lineColorConst = '#FFFFFF'; //startowy kolor linii poziomej na srodku boiska

//-----zmienne-----
let pitchColor = pitchColorConst; //kolor boiska zmienny w czasie gry
let netColor = netColorConst; //kolor siatki zmienny w czasie gry
let lineColor = lineColorConst; //kolor linii poziomej zmienny w czasie gry