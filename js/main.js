var operandoa;
var operandob;
var operacion;

function init(){
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	/*var division = document.getElementById('division');
	var multiplicacion = document.getElementById('multiplicacion');*/
	var borrar = document.getElementById('borrar');
	/*var restar = document.getElementById('restar');
	var sumar = document.getElementById('mas');*/
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
	var operacion = ['division', 'multiplicacion', 'mas', 'restar'];

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function (e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	operacion[2].onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	operacion[3].onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	operacion[1].onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	operaciongi[0].onclick = function(e){
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
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob); 
			break;
		case "-":
			res = parseFloat(operandoa) - parseFloat(operandob); 
			break;
		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob); 
			break;
		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob); 
			break;
	}
	resetear();
	resultado.textContent = res;
}