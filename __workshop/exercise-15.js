// Exercise 15
//
// function filterNonUnique(arr) {
// arr is an array of values of any type
function filterNonUnique(arr) {
    // arr is an array of values of any type
    return arr.filter(function(item) {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));



// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;