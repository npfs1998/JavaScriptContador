var contador = 0;

var currentNumber = document.getElementById('currentNumber');

const mincontador = 0;
const maxcontador = 15;

function incrementa() {
	if (contador < maxcontador){
		contador++;
		currentNumber.innerHTML = contador;
	}
	
	if (contador === maxcontador){alert("Valor máximo atingido!");}
}

function decrementa() {
	if (contador > mincontador){
		contador--;
		currentNumber.innerHTML = contador;
	}
	
	if (contador === mincontador){alert("Valor mínimo atingido!");}
}

function zeravalor() {
	contador = 0;
	currentNumber.innerHTML = contador;
}