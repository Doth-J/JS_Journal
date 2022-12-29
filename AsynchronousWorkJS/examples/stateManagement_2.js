// Source: https://nodejs.dev/en/learn/asynchronous-flow-control/
//
// STATE MANAGEMENT 2
// Functions may or may not be state dependent. 
// State dependency arises when the input or other variable of a function relies on an outside function.
// 
// if the data exists outside of memory the iteration will no longer work:

function getSong() {
    let _song = '';
    let i = 100;
    for (i; i > 0; i -= 1) {
        /* eslint-disable no-loop-func */
        setTimeout(function () {
        _song += `${i} beers on the wall, you take one down and pass it around, ${
            i - 1
        } bottles of beer on the wall\n`;
        if (i === 1) {
            _song += "Hey let's get some more beer";
        }
        }, 0);
        /* eslint-enable no-loop-func */
    }

    return _song;
}

function singSong(_song) {
    if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
    console.log(_song);
}
  
const song = getSong('beer');
// this will not work
singSong(song);
// Uncaught Error: song is '' empty, FEED ME A SONG!
  
// Why did this happen? setTimeout instructs the CPU to store the instructions elsewhere on the bus, 
// and instructs that the data is scheduled for pickup at a later time. Thousands of CPU cycles pass 
// before the function hits again at the 0 millisecond mark, the CPU fetches the instructions from the
// bus and executes them. The only problem is that song ('') was returned thousands of cycles prior.