const sumAll = function(a,b) {
    let suma = 0
    let lista = [a,b]
    lista.sort()

    let prueba1 = typeof a
    let prueba2 = typeof b

    
    for(let j=0;j<=lista[1] -lista[0] ;j++){
        suma += lista[1] -j
    } 
    
    if(suma<0 || prueba1 != 'number' || prueba2 != 'number' ){
        return 'ERROR'
    } else{
        return suma
    }

};

// Do not edit below this line
module.exports = sumAll;
