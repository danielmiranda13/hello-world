

class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre, codigo, frase) {
        this.nombre= nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

}



const spiderman = new Persona( 'PEteR PaRkar', 'SPideRMAAN', 'Tu vecibno');
const ironman = new Persona( 'Tny Sjaj', 'Aaaaaaaaa', 'ayuda vecibno');
console.log( spiderman );
console.log( ironman );
;