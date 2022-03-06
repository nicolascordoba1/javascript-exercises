const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    if(a<0 || b<0) return 'ERROR'
    if(a>b){
        let temp = b
        b = a
        a = temp
    }
    let suma = 0
    for(i=a; i<=b; i++){
        suma +=i
    } return suma

};

// Do not edit below this line
module.exports = sumAll;
