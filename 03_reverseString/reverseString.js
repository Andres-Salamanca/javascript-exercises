
const reverseString = function(word) {
    let split = word.split('');
    let length = split.length
    let last
    const spin = new Array();
    for(i = 0;i<length;i++){
        last = split.shift();
        spin.unshift(last);
    }
   return spin.join('')
};

// Do not edit below this line
module.exports = reverseString;
