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

//Sprawdz, czy podana liczba miesci sie w podanym zakresie (jesli tak - zwroc 'true', jesli nie - zwroc dolna badz gorna granice przedzialu)
const checkNumber = (number, min, max) =>
{
	if(!isNaN(number) && !isNaN(min) && !isNaN(max) && (min < max))
	{
		if(number < min) return min;
		else if(number > max) return max;
		else return true;
	}
}