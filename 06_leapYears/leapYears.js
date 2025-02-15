const leapYears = function (val) {
    if (val % 4 == 0) {
        if (val % 100 == 0 && val % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
