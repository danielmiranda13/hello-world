


const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true );
console.log( !true );
console.log( !false  );

console.log( !regresaFalse() );

console.warn('And');
console.log( true && true);
console.log( true && ! false);

console.log('=========');
console.log( regresaFalse() && regresaTrue() );

console.log('===== && =====');
regresaFalse() && regresaTrue();


console.warn('OR');
console.log( true || false);
console.log( false || false);

console.log( regresaTrue() || regresaFalse() );