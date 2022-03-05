const removeFromArray = function(argumentos) {
    let lista = []
    for(let i=0; i<argumentos[0].length;i++){
        for (let j=1;j<i;j++){
          if(lista[i] === argumentos[j]){
            lista.splice(i,1)
            }  
        }      
    }
    return lista
};

// Do not edit below this line
module.exports = removeFromArray;
