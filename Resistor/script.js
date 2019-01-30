

var pbanda = document.getElementById("color1");
var sbanda = document.getElementById("color2");
var multi = document.getElementById("multi");
var tole = document.getElementById("tole");
var resistencia = 0;

//hago el primer calculo
calculo();

function calculo () {
	
	//Obtenemos el valor de las bandas y los concatenamos
	var num = valor_color(pbanda.value).toString()+valor_color(sbanda.value).toString();

	//obtenemos el valor multiplicador
	var multiplo = valor_multiplicador(multi.value);

	//Obtenemos la tolerancia
	var tolerancia = valor_tolerancia(tole.value)*100;

	//Calculamos la resistencia
	resistencia = parseInt(num,10)*multiplo;


	//Le ponemos una letra en caso de que tenga demasiados digitos el resultado
	var letra;
	if (resistencia>1000000000) {
		resistencia/=1000000000;
		letra = "G";

	}else if (resistencia>1000000) {
		resistencia/=1000000;
		letra = "M";
	}else if (resistencia>1000) {
		resistencia/=1000;
		letra = "K";		
	}else if (resistencia<=1000) {
		letra = " ";
		
	}


	//Mostramos el resultado en la web
	document.getElementById("resistencia").innerHTML = resistencia + letra;

	//Mostramos la tolerancia
	document.getElementById("toler").innerHTML = tolerancia;
}





function valor_color (color) {

	var num = 0;
	var banda = ["Negro", "Marrón", "Rojo","Naranja","Amarillo","Verde","Azul","Violeta","Gris","Blanco"];

	switch (color) {
		case banda[0]:
			num = 0;
			break;
		case banda[1]:
			num = 1;
			break;
		case banda[2]:
			num = 2;
			break;
		case banda[3]:
			num = 3;
			break;
		case banda[4]:
			num = 4;
			break;
		case banda[5]:
			num = 5;
			break;
		case banda[6]:
			num = 6;
			break;
		case banda[7]:
			num = 7;
			break;
		case banda[8]:
			num = 8;
			break;
		case banda[9]:
			num = 9;
			break;
		
	}
	return num;
}

function valor_multiplicador (color) {

	var multi = 0;
	var banda = ["Negro", "Marrón", "Rojo","Naranja","Amarillo","Verde","Azul","Violeta","Gris","Blanco","Dorado0","Plateado"];

	switch (color) {
		case banda[0]:
			multi = 1;
			break;
		case banda[1]:
			multi = 10;
			break;
		case banda[2]:
			multi = 100;
			break;
		case banda[3]:
			multi = 1000;
			break;
		case banda[4]:
			multi = 10000;
			break;
		case banda[5]:
			multi = 100000;
			break;
		case banda[6]:
			multi = 1000000;
			break;
		case banda[7]:
			multi = 10000000;
			break;
		case banda[8]:
			multi = 100000000;
			break;
		case banda[9]:
			multi = 1000000000;
			break;
		case banda[10]:
			multi = 0.1;
			break;
		case banda[11]:
			multi = 0.01;
			break;
		
	}
	return multi;
}

function valor_tolerancia (color) {

	var tole = 0;
	var banda = ["Negro", "Marrón", "Rojo","Naranja","Amarillo","Verde","Azul","Violeta","Gris","Blanco","Dorado","Plateado"];

	switch (color) {
		case banda[0]: //negro
			tole = 0;
			break;
		case banda[1]: //marron
			tole = 0.01;
			break;
		case banda[2]: //rojo
			tole = 0.02;
			break;
		case banda[3]: //naranja
			tole = 0;
			break;
		case banda[4]: //amarillo
			tole = 0;
			break;
		case banda[5]: //verde
			tole = 0.005;
			break;
		case banda[6]: //azul
			tole = 0.0025;
			break;
		case banda[7]: //violeta
			tole = 0.001;
			break;
		case banda[8]: //gris
			tole = 0.0005;
			break;
		case banda[9]: //blanco
			tole = 0;
			break;
		case banda[10]: //gold
			tole = 0.05;
			break;
		case banda[11]: //silver
			tole = 0.1;
			break;
		
	}
	return tole;
}