const sumAll = function(num1,num2) {
    if(!(num1>0 && num2>0 && typeof num1 === "number" && typeof num2 === "number")){return "ERROR"}
    let min ,max;
    if(num1 > num2){max=num1; min=num2}
    else{max=num2; min=num1}
    return (((max-min)+1)*(min+max))/2;
};

// Do not edit below this line
module.exports = sumAll;
