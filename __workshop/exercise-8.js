// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
function greet(list) {
    return list.map(list => "Hello " + list);
    // list is an array of strings
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greet(["David", "Billy", "Lisa", "Jennifer"]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = greet;