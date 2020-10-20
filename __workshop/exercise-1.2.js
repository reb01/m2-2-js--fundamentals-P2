// Exercise 1.2
//
// Write a function that accepts a string of comma-separated names
// and returns an array of those names.
//
// Example:
// arrOFNames('Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137')
// should return...
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function arrOFNames(string) {
    var array = string.split(',');
    return array;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(
    arrOFNames(
        "Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Rick C-137"
    )
);
// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = arrOFNames;