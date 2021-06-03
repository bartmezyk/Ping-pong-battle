//Sprawdz, czy nazwa koloru wpisana w inpucie koloru jest poprawna (np. #f0565a).
const checkColor = color =>
{
	if((color.length == 7) && (color.charAt(0) == '#')) //Dlugosc napisu w inpucie musi rownac sie 7 i pierwszym znakiem musi byc '#'.
	{
		for(i = 1; i < 7; i++) //Sprawdzenie czy jakis znak nie liczac pierwszego jest rozny od cyfry (w ASCII: 48-57) lub od litery: A-F (65-70), a-f (97-102). Jesli rozny, to zwroc 'false'.
		{
			if((color.charCodeAt(i) < 48) || ((color.charCodeAt(i) > 57) && (color.charCodeAt(i) < 65)) || ((color.charCodeAt(i) > 70) && (color.charCodeAt(i) < 97)) || (color.charCodeAt(i) > 102))
			{
                console.error(`Some sign/s different than digit (0 - 9) or proper letter (a-f/A-F) in some input/s.`);
				return false;
			}
		}
		return true; //Jesli wszystkie znaki to cyfry albo litery (a-f)/(A-F), to zwroc 'true'.
	}
    console.error(`Wrong length or first sign different than '#' in some input/s.`);
	return false;
}

//Sprawdz poprawnosc liczby wprowadzonej w inpucie.
const checkNumber = (input, min, max, currentVal) =>
{
	//Zawartosc inputa.
	const inpVal = parseFloat(input.value);

	//Nowa wartosc (jesli funkcja zwroci newVal = 0, to znaczy, ze nie jest mozliwe przypisanie nowej wartosci z inputa).
	let newVal = 0;

	//Jesli wprowadzona wartosc jest liczba i jest rozna od aktualnie ustawionej wartosci.
	if(!isNaN(inpVal) && (inpVal != currentVal))
	{
		//Jesli wprowadzona wartosc miesci sie w przedziale <min, max>.
		if(inpVal >= min && inpVal <= max) newVal = inpVal;
		else
		{
			//Jesli jest mniejsza niz dolna granica przedzialu.
			if(inpVal < min) newVal = min;
			//Jesli wieksza niz gorna granica.
			else if(inpVal > max) newVal = max;

			//Odswiez zawartosc inputa o prawidlowa wartosc (dolna lub gorna granice przedzialu).
			input.value = newVal;
		}
	}
	return newVal;
}