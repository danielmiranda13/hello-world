



let a = 10;

if ( a > 10 ) {
    console.log('A es mayor que 10');


}
else {
    console.log('A es menor o igual que 10');
}

//console.log('Fin del programa');


const hoy = new Date();

console.log( hoy );
let dia = hoy.getDay();

console.log ({ dia });

if ( dia === 0) {
    console.log('Domingo');
} else {
    console.log('No es domingo');
}


const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

console.log( diasLetras[dia] );