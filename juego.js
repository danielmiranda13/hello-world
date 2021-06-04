/**
 * C = Tréboles
 * D = Diamantes
 * H = Corazones
 * S = Picas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasComputadora = document.querySelector('#computadora-cartas')
const divCartasJugador = document.querySelector('#jugador-cartas');

const puntosHTML = document.querySelectorAll('small');

// Función para crear Deck
const crearDeck = () => {
    for(let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos) {
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales) {
            deck.push( esp + tipo );
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

crearDeck();

// Función para tomar una carta.
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


// pedirCarta();    
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

// turno de la computadora

const turnoComputadora = ( puntosMinimos ) => {

    do{
    const carta = pedirCarta();
    
    puntosComputadora = puntosComputadora + valorCarta( carta );
    puntosHTML[1].innerText = puntosComputadora

    // <img class="carta" src="assets/cartas/2C.png"> 
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD
    imgCarta.classList.add('carta');
    divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21) {
            break;
        }

    } while( puntosComputadora < puntosMinimos && (puntosMinimos <= 21 ) )
    
    setTimeout(() => {

   
        if ( puntosComputadora=== puntosMinimos ) {
            alert('Empate!')
        }else if ( puntosComputadora > 21) {
            alert('Ganaste!');
        }  else {
            alert('Perdiste!');
        }

    }, 10 );

}




// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador

    // <img class="carta" src="assets/cartas/2C.png"> 
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if (puntosJugador > 21) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn('Felicidades 21!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora ( puntosJugador );
    }


});


// botonDetener
btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora ( puntosJugador );
})

// botonNuevo
btnNuevo.addEventListener('click', () =>{
    deck = crearDeck();

    console.clear();
    puntosJugador       =0;
    puntosComputadora   =0;
    puntosHTML[0] = 0;
    puntosHTML[1] = 0;

    divCartasJugador.innerHTML      ='';
    divCartasComputadora.innerHTML  ='';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});