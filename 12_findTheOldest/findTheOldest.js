
const findTheOldest = function (arr) {
    // get age for each person
    const ageArr = arr.map((person) => {
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    })
    // get the index of the largest number in the array we created above
    const oldestIndex = ageArr.indexOf(Math.max(...ageArr));
    // return coresponding object at that index in original array
    return arr[oldestIndex];
}

// Do not edit below this line
module.exports = findTheOldest;
