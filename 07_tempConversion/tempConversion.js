const ftoc = function(tempf) {
  const tempc = (tempf - 32)*(5/9)
  if(tempc==0){
    return tempc
  } return parseFloat(tempc.toFixed(1))
};

const ctof = function(tempc) {
  const tempf = (tempc * (9/5)) + 32
  if(tempf == 0){
    return tempf
  }return parseFloat(tempf.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
