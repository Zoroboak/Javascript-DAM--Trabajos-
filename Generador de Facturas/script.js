
//Inicializo los vectores
var concepto = [4]; 
var precio = [4];
var cantidad = [4];
var iva = [4];
var subtotal = [4];

//Obtengo el valor de la primera fila
concepto[0] = document.getElementById("concepto1");
precio[0] = document.getElementById("precio1");
cantidad[0] = document.getElementById("cantidad1");
iva[0] = document.getElementById("iva1");
subtotal[0] = document.getElementById("subtotal1");

//Obtengo el valor de la Segunda fila
concepto[1] = document.getElementById("concepto2");
precio[1] = document.getElementById("precio2");
cantidad[1] = document.getElementById("cantidad2");
iva[1] = document.getElementById("iva2");
subtotal[1] = document.getElementById("subtotal2");

//Obtengo el valor de la Tercera fila
concepto[2] = document.getElementById("concepto3");
precio[2] = document.getElementById("precio3");
cantidad[2] = document.getElementById("cantidad3");
iva[2] = document.getElementById("iva3");
subtotal[2] = document.getElementById("subtotal3");

//Obtengo el valor de la Cuarta fila
concepto[3] = document.getElementById("concepto4");
precio[3] = document.getElementById("precio4");
cantidad[3] = document.getElementById("cantidad4");
iva[3] = document.getElementById("iva4");
subtotal[3] = document.getElementById("subtotal4");

//Obtengo el valor de la Quinta fila
concepto[4] = document.getElementById("concepto5");
precio[4] = document.getElementById("precio5");
cantidad[4] = document.getElementById("cantidad5");
iva[4] = document.getElementById("iva5");
subtotal[4] = document.getElementById("subtotal5");

//Resto de variables globales
var base = document.getElementById("base");
var iva_final = document.getElementById("iva");
var total = document.getElementById("total");

//cuando carga la pagina lo vuelvo a calcular todo
for (var i = 0; i < 5; i++) {
	calcula_fila(i);
}



function calcula_fila(i) {
	// body... 
	var resultado = 0;
	resultado=((parseInt(precio[i].value, 10)*parseInt(cantidad[i].value, 10))*(parseInt(iva[i].value, 10)/100))+(parseInt(precio[i].value, 10)*parseInt(cantidad[i].value, 10));

	subtotal[i].innerHTML = resultado;

	//actualizo el calculo total

	var total_base = 0;
	var total_iva = 0;
	var total_importe = 0;

	//Calculo los valores totales
	for (var i = 0; i < 5; i++) {
		total_base+=(parseInt(precio[i].value, 10)*parseInt(cantidad[i].value, 10));
		total_iva+=((parseInt(precio[i].value, 10)*parseInt(cantidad[i].value, 10))*(parseInt(iva[i].value, 10)/100));
	}

	total_importe = total_iva + total_base;


	//Muestro los resultados en la web
	base.innerHTML = total_base;
	iva_final.innerHTML = total_iva;
	total.innerHTML = total_importe;
}


