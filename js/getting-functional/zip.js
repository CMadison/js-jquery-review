// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]
function fuckprogramming(artarr, albumsarr) {
  var result = [];
  for(var i = 0; i <= artarr.length-1; i++) {
    var combarr = []
    combarr.push(artarr[i]);
    console.log('combarr1:', combarr)
    combarr.push(albumsarr[i]);
    console.log('combarr2:', combarr)
    result.push(combarr);
    console.log('combarr3:', result)
    albumsarr[i].push
    console.log('result:', result)
    }
    console.log('final result:', result);
  }
fuckprogramming(artists, albums);
