/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    bigNum = Number.NEGATIVE_INFINITY;
    if (numbers.length == 0) {
        return undefined;
    }
    numbers.forEach(element => {
        if(element>bigNum)
        {
            bigNum = element;
        }
    });
    return bigNum;
}

module.exports = findLargestElement;