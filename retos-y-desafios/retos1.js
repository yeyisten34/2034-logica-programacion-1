
//1. Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".

alert('¡Bienvenida y bievenido a nuestro sitio web! ');

//2. Declara una variable llamada nombre y asígnale el valor "Luna".

let nombre = 'Luna';


//3- Crea una variable llamada edady asígnale el valor 25.

let edady = 25;

//4. Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;

//5. Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

//6. Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");

//7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeError = '¡Error!';

//8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
let nombre1 = prompt('¿Cual es tu nombre de usuario?'); //el error porque hay una variable con el mismo nombre arriba.

/*9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".**/
let edadMinima = 18;
let edad = prompt('¿Cual es tu nombre de usuario?');

if (edad >= edadMinima){
    alert("¡Puedes obtener tu licencia de conducir!")
}