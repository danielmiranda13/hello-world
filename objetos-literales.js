


let personaje = {
    nombre: 'Tony Skart',
    codeName: 'IromNan',
    vivo: false,
    edad: 41,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Makr I', 'Makr V', 'Hulbkuster'],
    direccion: {
        zip: '15645',
        ubicacion: 'Malibu, California',
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('Lng', personaje.coords.lng);

console.log ( 'No. de Trajes', personaje.trajes.length);

delete personaje.edad;

const entriePares = Object.entries( personaje );
console.log( entriePares );