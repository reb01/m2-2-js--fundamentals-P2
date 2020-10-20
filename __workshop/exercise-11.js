// Exercise 11
//

function calculateAverage(grades) {
    // grades is an array of numbers
    let sum = grades.reduce(function(a, b) {
        return a + b;
    });
    return Math.round(sum / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([23, 23, 23, 23, 23]));

// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;