/*1.Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/

/*
let diaSemana = prompt('¿Qué día de la semana es hoy?')

if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert('Buen fin de semana');
} else {
    alert("¡Buena semana!")
}
*/

/*2.Verifica si un número ingresado por 
el usuario es positivo o negativo. 
Muestra una alerta informativa.*/

/*
let numero = prompt('Ingresa un numero: ');

if (numero < 0) {
    alert('Es un numero negativo')
} else {
    alert('Numero Positivo')
}*/


/*3.Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, 
muestra "Intenta nuevamente para ganar.".**/

/*
let puntos = 100;

if (puntos >= 100) {
    alert('Has ganado')
}else{
    alert('Intenta nuevamente para ganar');
}
*/

/*4.Crea un mensaje que informe al usuario sobre el saldo
 de su cuenta, utilizando un template string para incluir 
 el valor del saldo.*/

 let saldo = 1300;
 
 alert(`Tu saldo disponible es: ${saldo}`);

/*5.Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.*/

let nombreUsuario = prompt('Ingresa tu nombre: ');
alert(`Bienvenid@ ${nombreUsuario}`);