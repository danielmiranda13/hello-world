

const dia = 2;
const horaActual = 10;

let horaApertura;
let message;

if ( dia === 0 || dia === 6 ) {
    console.log('Fin de semana');
    horaApertura = 9;
} else{
    console.log('Día de semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = ('Está abierto');
} else{
    mensaje = ('Hoy abrimos a las ' + (horaApertura)) 
}

console.log(horaApertura + mensaje);





