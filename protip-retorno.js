


//function crearPersona( nombre, apellido){
    //return{ nombre, apellido }
//}

const crearPersona = ( nombre, apellido) => ({ nombre, apellido });




const persona = crearPersona( ' Daniel', 'Miranda');
console.log(persona);


function imprimeArgumentos(){
    console.log( arguments );
}



const imprimeArgumentos2 = ( args ) => {
    console.log( args );
}


imprimeArgumentos2(10, true, false, 'Daniel', 'Hola');