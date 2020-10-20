// Exercise 1.6
//
// Write a function that accepts an array of strings and a string.
// It should return the array without the string.
//
// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
//
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeStringFromArray(array, string) {
    // complete the function
    var i = 0;
    while (i < array.length) {
        if (array[i] === string) {
            array.splice(i, 1);
        } else {
            ++i;
        }
    }
    return array;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;