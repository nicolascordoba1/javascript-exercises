const reverseString = function(string) {
    let reverse = string.split(",")
    reverse = reverse.join(',')
    let newText = ''
    for(i=string.length-1; i>=0;i--){
        newText += reverse[i]

    }
    return newText

};

// Do not edit below this line
module.exports = reverseString;
