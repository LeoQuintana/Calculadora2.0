var operandoa;
var operandob;
var operacion;
var operaciones = ['/', '*', '+', '-'];
var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


function init(){
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var division = document.getElementById('division');
	var multiplicacion = document.getElementById('multiplicacion');
	var borrar = document.getElementById('borrar');
	var restar = document.getElementById('restar');
	var sumar = document.getElementById('mas');
	var parentesis = document.getElementById('parentesis');
	var punto = document.getElementById('punto');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');



	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[0];
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[1];
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[2];
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[3];
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[4];
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[5];
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[6];
	}
	ocho.onclick = function (e){
		resultado.textContent = resultado.textContent + numeros[7];
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[8];
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + numeros[9];
	}
	reset.onclick = function(e){
		resetear();
	}
	sumar.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = operaciones[2];
		limpiar();
	}
	restar.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = resultado.textContent;
		resolver();
	}

}
function limpiar (){
	resultado.textContent = "";
}
function resetear (){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}
function resolver(){
	var res = 0;
	switch(operacion){
		case operaciones[2]:
			res = parseFloat(operandoa) + parseFloat(operandob); 
			break;
		case operaciones[3]:
			res = parseFloat(operandoa) - parseFloat(operandob); 
			break;
		case operaciones[1]:
			res = parseFloat(operandoa) * parseFloat(operandob); 
			break;
		case operaciones[0]:
			res = parseFloat(operandoa) / parseFloat(operandob); 
			break;
	}
	resetear();
	resultado.textContent = res;
}

	function resalta (elEvento){
	var evento = elEvento || windows.event;
		switch(evento.type){
			case 'mouseover':
				this.style.backgroundColor = 'blue';
				break;
			case 'mouseout':
				this.style.backgroundColor = 'green';
				break;	
		}
}

window.onload = function(){
	document.getElementById("borrar").onmouseover = resalta;
	document.getElementById("borrar").onmouseout =resalta;

}