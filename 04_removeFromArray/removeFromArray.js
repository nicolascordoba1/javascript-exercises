const removeFromArray = function(lista, ...numeros) {
    numeros.sort()
    for(let i=0; i<=lista.length; i++){
        for(let j=0; j<numeros.length;j++){
            if(lista[i]===numeros[j]){
                lista.splice(i,1)
            }
        }
    } return lista
};

// Do not edit below this line
module.exports = removeFromArray;
