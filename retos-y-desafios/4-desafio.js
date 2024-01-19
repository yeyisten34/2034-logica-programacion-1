/** 
 * 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
 */

//let mensaje = 'Bienvenid@'
//console.log(mensaje);

/**
 * 2. Crea una variable llamada "nombre" y 
 * asígnale tu nombre. Luego, utiliza console.log 
 * para mostrar el mensaje 
 * "¡Hola, [tu nombre]!" en la consola del navegador.
 * 
 */

//let nombre = 'Nehemias';
//console.log(`¡Hola, ${nombre}`)

/**
 * 3. Crea una variable llamada "nombre" 
 * y asígnale tu nombre. Luego, utiliza alert 
 * para mostrar el mensaje "¡Hola, [tu nombre]!".
 * 
 */

//let nombre = 'Nehemias';
//alert(nombre)

/**
 * 4. Utiliza prompt y haz la siguiente pregunta: 
 * ¿Cuál es el lenguaje de programación que más 
 * te gusta?. Luego, almacena la respuesta en una 
 * variable y muestra la respuesta en la consola del navegador.
 * 
 */

//let respuesta = prompt('¿Cuál es el lenguaje de programación que mas te gusta');
//console.log(respuesta);

/**
 * 5. Crea una variable llamada "valor1" y otra llamada
 *  "valor2", asignándoles valores numéricos de tu elección. 
 * Luego, realiza la suma de estos dos valores y almacena el 
 * resultado en una tercera variable llamada "resultado". 
 * Utiliza console.log para mostrar el mensaje "La suma de 
 * [valor1] y [valor2] es igual a [resultado]." en la consola.
 * 
 */

//let valor = 9;
//let valor2 = 6;
//let resultadoSuma = valor + valor2;
//console.log(`La suma de ${valor} y ${valor2} es igual a ${resultadoSuma}`);

/**
 * 6. Crea una variable llamada "valor1" y otra 
 * llamada "valor2", asignándoles valores numéricos 
 * de tu elección. Luego, realiza la resta de estos dos
 *  valores y almacena el resultado en una tercera variable
 *  llamada "resultado". Utiliza console.log para 
 * mostrar el mensaje "La diferencia entre [valor1] y 
 * [valor2] es igual a [resultado]." en la consola.
 * 
 */

//let valor = 9;
//let valor2 = 6;
//
//let resultadoResta = valor - valor2;
//console.log(`La resta de ${valor} y ${valor2} es igual a ${resultadoResta}`);

/*7. Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, 
utiliza un if para verificar 
si la persona es mayor o menor de edad y 
muestra un mensaje apropiado en la consola.*/

let edad = parseInt(prompt('¿Cuál es tu edad?'));

console.log(edad >= 18 ? 'Mayor de edad' : 'Menor de edad');

/**
8. Crea una variable "numero" 
y solicita un valor con prompt. Luego, 
verifica si es positivo, negativo o cero utilizando 
un if-else y muestra el mensaje correspondiente.
*/

let numero = parseInt(prompt('Ingresa un numero: '));

if (numero >= 0) {
    if (numero != 0) {
        console.log('Es posiitivo');
    } else {
        console.log('Es cero');
    }


} else {
    console.log('Es negativo');
}


/*
9. Utiliza un bucle while para mostrar los 
números del 1 al 10 en la consola.
*/

let contador = 1;

while (contador < 11){

    console.log(contador)
    contador = contador+1;
}


/*
10. Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor 
o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/

let nota = 10;

if(nota > 6){
console.log('Aprobado');
}else{
console.log('reprobado')
}

/*
11. Utiliza Math.random para generar cualquier 
número aleatorio y muestra ese número en la consola.
*/
console.log(Math.random());
/*
Utiliza Math.random para generar un número entero entre 1 y 10
 y muestra ese número en la consola.
*/
console.log(Math.floor(Math.random()*10));

/*
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/

console.log(Math.floor(Math.random()*1000)+1);