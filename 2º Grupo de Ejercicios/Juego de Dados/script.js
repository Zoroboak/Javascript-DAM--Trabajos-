/*Por Pedro Pérez a 18/02/2019
Modulo: LMAR*/


//Declaro las variables que contendran mi ruta
var ruta = "dados/"
var fichero = "72dpi_Die_";
var color = "Red_Rojo";
var dado = 1;

//Obtengo los elementos que utilizare del DOM
var dado_1 = document.getElementById("dado-1");
var dado_2 = document.getElementById("dado-2");
var dado_3 = document.getElementById("dado-3");
var dado_4 = document.getElementById("dado-4");


function dos_dados (evento) {
	dado_1.style.display = 'block';
	dado_2.style.display = 'block';
	dado_3.style.display = 'block';
	dado_4.style.display = 'block';

	dado_1.style.visibility = 'hidden';
	dado_2.style.visibility = 'inherit';
	dado_3.style.visibility = 'inherit';
	dado_4.style.visibility = 'hidden';

	//Restauro el estilo
	dado_1.style.marginTop = '2em';
}
function tres_dados (evento) {
	dado_1.style.display = 'block';
	dado_2.style.display = 'block';
	dado_3.style.display = 'block';
	dado_4.style.display = 'none';

	dado_1.style.visibility = 'inherit';
	dado_2.style.visibility = 'inherit';
	dado_3.style.visibility = 'inherit';
	dado_4.style.visibility = 'hidden';

	//Posicionar los elementos
	dado_1.style.marginTop = '25%';

}
function cuatro_dados (evento) {
	dado_1.style.display = 'block';
	dado_2.style.display = 'block';
	dado_3.style.display = 'block';
	dado_4.style.display = 'block';

	dado_1.style.visibility = 'inherit';
	dado_2.style.visibility = 'inherit';
	dado_3.style.visibility = 'inherit';
	dado_4.style.visibility = 'inherit';

	//Restauro el estilo
	dado_1.style.marginTop = '2em';
}


function tirada (evento) {
	
	dado_1.src = ruta+fichero+color+"_"+aleatorio(1,4)+".png";
	dado_2.src = ruta+fichero+color+"_"+aleatorio(1,4)+".png";
	dado_3.src = ruta+fichero+color+"_"+aleatorio(1,4)+".png";
	dado_4.src = ruta+fichero+color+"_"+aleatorio(1,4)+".png";

}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}