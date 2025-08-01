let numeroSecreto = 0;
let intentos = 0;
let listaNum = [];
let numMaximo = 10;

function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

	if (numeroUsuario === numeroSecreto) {
		asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if (numeroUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'El número secreto es menor');
		} else {
			asignarTextoElemento('p', 'El número secreto es mayor');
		}
		intentos++;
		limpiarCaja();
	}
	return;
}

function limpiarCaja() {
	document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
	let numGenerado = Math.floor(Math.random() * numMaximo) + 1;

	if (listaNum.length == numMaximo) {
		asignarTextoElemento('p', 'Ya se sortearon todos los números posibles :)');
	} else {
		if (listaNum.includes(numGenerado)) {
			return generarNumSecreto();
		} else {
			listaNum.push(numGenerado);
			return numGenerado;
		}
	}
}

function condicionesIniciales() {
	asignarTextoElemento('h1', 'Juego del número secreto');
	asignarTextoElemento('p', `Indica un número del 1 al ${numMaximo}`);
	numeroSecreto = generarNumSecreto();
	intentos = 1;
}

function reiniciarJuego() {
	limpiarCaja();
	condicionesIniciales();
	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function main() {
	condicionesIniciales();
}

main()