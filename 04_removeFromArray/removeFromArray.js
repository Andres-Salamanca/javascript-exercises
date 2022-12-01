const removeFromArray = function() {
    let args = Array.from(arguments[0]);
    let undo = Array.from(arguments).slice(1);
    let result = [];
    args.forEach((element) => {
        if(!undo.includes(element)){
            result.push(element)
        }
    });
    return result; 
};

// Do not edit below this line
module.exports = removeFromArray;
