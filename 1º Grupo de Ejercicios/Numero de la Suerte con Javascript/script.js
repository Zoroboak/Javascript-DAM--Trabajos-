

//Codigo para que funcione el formulario
//let today = new Date().toISOString().substr(0, 10);


//######## Flujo del programa  ######


//Declaración de variables
var fecha = document.getElementById("entrada_fecha");
var boton = document.getElementById("entrada_boton");
var numero = 0;

//añadir escuchador de eventos
boton.addEventListener("click", nsuerte);


//Mi función
function nsuerte() {
	
	//1995-08-26
	//Sumar Digitos del año
	console.log("Año "+fecha.value);
	for (var i = 0; i < 4; i++) {
		numero += parseInt(fecha.value.charAt(i), 10);
	}
	console.log("Suma numero Año "+numero);
	//Sumar Digitos del mes
	for (var i = 5; i < 7; i++) {
		numero += parseInt(fecha.value.charAt(i), 10);
	}
	console.log("Suma numero Mes "+numero);
	//Sumar Digitos del dia
	for (var i = 8; i <= 9; i++) {
		numero += parseInt(fecha.value.charAt(i), 10);
	}
	console.log("Suma numero dias "+numero);

	//si el numero final es de 2 digitos, entonces sacamos los digitos y los sumamos entre si

	while (numero>9) {
		console.log("while inicio "+numero);
		numero = parseInt(numero.toString().charAt(0),10) + parseInt(numero.toString().charAt(1),10);
		console.log("While Final "+numero);
	}

	console.log(numero);
	//Cambiar el valor del html
	document.getElementById("fecha").innerHTML = numero;
	
	//restablecer la variable numero a 0
	numero=0;
	
}

 