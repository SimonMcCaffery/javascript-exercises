const reverseString = function(str) {
    let text = str;
    const textArray = text.split("");
    let reverseArray = textArray.reverse();
    let reverseJoined = reverseArray.join("");
    return reverseJoined
};

// Do not edit below this line
module.exports = reverseString;
