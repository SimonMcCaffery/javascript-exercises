const removeFromArray = function(arr, ...valuesToRemove) {

    const removeSet = new Set(valuesToRemove)
    return arr.filter(item => !removeSet.has(item))

};

// Do not edit below this line
module.exports = removeFromArray;
