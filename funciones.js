

let Nombre = ('Daniel');

function saludar() {
    console.log('Hola ' + Nombre);
}

//const saludar2 = function(){
//    console.log('Hola Mundo');
//}

saludar();

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (Nombre) => {
    console.log('Hola Flecha ' + Nombre +'.');
}

const retornoDeSaludar = saludar( 'Daniel' + 25 + false + 'Toluca');
console.log({retornoDeSaludar});


saludarFlecha();
saludarFlecha2(Nombre);