let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número del 1 al 10 por favor");

console.log(numeroUsuario)

if (numeroUsuario == numeroSecreto){
alert(`Acertaste, el numero es: ${numeroUsuario}`);
}else{
    if(numeroUsuario > numeroSecreto){
        alert('El numero secreto es menor');
    }else{
        alert(' El numero secreto es mayor')
    }
}

