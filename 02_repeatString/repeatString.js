const repeatString = function(word,number) {
    if(number<0){return "ERROR"}
    let words =""
    for(i=0;i<number;i++){
        words += word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
