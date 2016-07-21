// pair(obj)
// Construct array pairs from objects.

// Example Input

// var obj = {
//   "Brian": "Hague",
//   "Sarah": "Hanley",
//   "Lenny": "Urbanowski",
// };

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]


var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

var arr = $.makeArray(obj)
console.log(arr);

// var keys = Object.keys(obj);
// console.log(keys);
// var values = Object.values(obj);
// console.log(values);
