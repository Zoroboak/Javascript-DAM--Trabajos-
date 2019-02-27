

/*Por Pedro Pérez a 18/02/2019
Modulo: LMAR*/

/*-----Vertical Tabs-------*/
function openEcuacion(evt, ecuacion) {
  
  var i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(ecuacion).style.display = "block";
  evt.currentTarget.className += " active";
} 

/*----- Calculo de las funciones matematicas -----*/

/*----- Calculo de multiplos ----------*/ 



function multiplo(evento){

  //Obtengo los valores que usare
  var n = parseInt(document.getElementById("m-menores").value, 10);
  i = document.getElementById("result-multiplos");
  ri = i.innerHTML;

  //Muestro el valor que calculo en el texto de respuesta
  document.getElementById("m-num").innerHTML = n;

  //si N = 5
  //5*1=5
  //5*2=10
  //5*3=15
  //5*4=20
  //5*5(N-1||<N)=25 //Esto es el final del ciclo, puede ser n-1 o hasta que i sea menor que N

  var resultado = 0;

  //Limpio el contenedor
  document.getElementById("result-multiplos").innerHTML = " ";

  //Hago un ciclo que muestra los multiplos de N menores que N
  for (var i = 0; i < n; i++) {
    
    if (multiple(n,i)) {
      ri = ri +" "+ i + ", ";
      document.getElementById("result-multiplos").innerHTML = ri;
    }


  }

}

function multiple(valor, multiple){
    var resto = 0;

    resto = valor % multiple;
    if(resto==0)
        return true;
    else
        return false;
}


/*----- Calculo de ecuaciones de segundo grado ------*/

function segundoGrado (evento) {
  
  var a = parseInt(document.getElementById("ecu-a").value, 10);
  var b = parseInt(document.getElementById("ecu-b").value, 10);
  var c = parseInt(document.getElementById("ecu-c").value, 10);

  //(a*x^2+b*x+c=0) Esta es la formula de la ecuación de segundo grado

  var s1 = ((-1*-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

  var s2 = ((-1*-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);


  document.getElementById("ecu-resp1").innerHTML = s1.toString();
  document.getElementById("ecu-resp2").innerHTML = s2.toString();

}

/*----Calculo de numeros primos ------*/
function nPrimos (argument) {

  //Limpio el contenedor
  document.getElementById("result-primo").innerHTML = " ";

  v = parseInt(document.getElementById("n-primo").value, 10);
  r = document.getElementById("result-primo");
  ri = r.innerHTML;

  for (var i = 0; i < v; i++) {
    console.log(i);
    if (isPrime(i)) {
      ri = ri +" "+ i + ", ";
      document.getElementById("result-primo").innerHTML = ri;
    }
  }
}

function isPrime (n){
    if (n < 2) return false;
    /**
     * Un entero es primo si no es divisible por ningún primo menor o igual a su raíz cuadrada.
     **/

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}



