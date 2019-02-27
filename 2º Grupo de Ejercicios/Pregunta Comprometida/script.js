

var b_no = document.getElementById("no");
var b_si = document.getElementById("si");
var bs_si = b_si.style;
var cont = 0;

function si (evento) {
	b_si.style.width = '50%';
	if (cont==0) {
		bs_si.cssFloat = 'right';
		cont++;
	}else if (cont==1) {
		bs_si.cssFloat = 'left';
		cont--;
	}
}

function no () {
	// body... 
	alert("En Jobtoday, tienes empleos de hosteleria 😉");
}