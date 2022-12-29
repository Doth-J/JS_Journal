// Source: https://nodejs.dev/en/learn/asynchronous-flow-control/
//
// STATE MANAGEMENT 1
// Functions may or may not be state dependent. 
// State dependency arises when the input or other variable of a function relies on an outside function.
// In this way there are two primary strategies for state management:
// 
// 1. Passing in variables directly to a function
// 2. Acquiring a variable value from a cache, session, file, database, network, or other outside source.
//
// Managing state with global variables is often a sloppy anti-pattern that makes it difficult or impossible to guarantee state.
// Global variables in complex programs should be avoided when possible.

function getSong() {
    let _song = '';
    let i = 10;
    for (i; i > 0; i -= 1) {
      _song += `${i} beers on the wall, you take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall\n`;
      if (i === 1) {
        _song += "Hey let's get some more beer";
      }
    }
  
    return _song;
  }
  
  function singSong(_song) {
    if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
    console.log(_song);
  }
  
  const song = getSong();
  // this will work
  singSong(song);
  