// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

// var albums = [
//   { name: 'Gossamer', artist: 'Passion Pit' },
//   { name: 'Sigh no more', artist: 'Mumford and Sons' },
//   { name: 'Time to Pretend', artist: 'MGMT' }
// ];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]


var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

function fuckthis (array) {
  for (var i = 0; i <= array.length-1; i++) {
    array[i].key
    console.log(array);

  }
};

fuckthis(albums);
// for(var key in albums) {
//     var value = albums[key];
// };
