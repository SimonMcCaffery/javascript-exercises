const sumAll = function (start, end) {
    const range = [];

    if(Number.isInteger(start) && Number.isInteger(end) && start>= 0 && end>= 0){        
        if (start < end) {
            for (i = start; i <= end; i++) {
                range.push(i);
            }
        } else {
            for (i = end; i <= start; i++) {
                range.push(i);
            }
        }
        const sum = range.reduce((acc, num) => acc + num, 0)
        return sum;
    }else{
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
