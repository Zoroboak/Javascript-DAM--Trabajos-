

/*Por Pedro Pérez a 18/02/2019
Modulo: LMAR*/


var j_usuario = 0; //1= piedra, 2 = papel, = 3 tijeras


function jusuario (evento, opc) {

	switch (opc) {
	 	case 1: //piedra
	 		j_usuario = 1; //setPiedra
	 		console.log('1');
	 		document.getElementById("jg-piedra").className += " active";
	 		document.getElementById("jg-papel").className.replace(" active", "");
	 		document.getElementById("jg-tijeras").className.replace(" active", "");

	 		break;
	 	case 2: //papel
	 		j_usuario = 2; //setpapel
	 		console.log('2');
	 		document.getElementById("jg-piedra").className.replace(" active", "");
	 		document.getElementById("jg-papel").className += " active";
	 		document.getElementById("jg-tijeras").className.replace(" active", "");

	 		break;
	 	case 3: //tijeras
	 		j_usuario = 3; //settijeras
	 		console.log('3');
	 		document.getElementById("jg-piedra").className.replace(" active", "");
	 		document.getElementById("jg-papel").className.replace(" active", "");
	 		document.getElementById("jg-tijeras").className += " active";

	 		break;
	 	
	 	default:
	 		// statements_def
	 		j_usuario = 0; //Error, todos a 0
	 		document.getElementById("jg-tijeras").style.width = '85%';
	 		document.getElementById("jg-tijeras").style.width = '85%';
	 		document.getElementById("jg-tijeras").style.width = '85%';

	 		break;
	 } 
}