const palindromes = function (str) {

    //turns the string into an array containing only valid chararacters
    const alphaNumStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("");
    const reverseArr = [...alphaNumStr].reverse();

    return alphaNumStr.join("") === reverseArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
