/*
SONG FILTER
Suppose you're working on a music app, and you have an array of objects representing different songs 
that are available to play on the app.

Objectives:
You need to write a function that takes in an array of songs and returns a new array that contains only songs of a 
specific genre, and then you need to retrieve all the songs whose duration is longer than the specified duration.
Write a function, "filterSongs", which accepts two arguments; an array of all songs and a filter object with the genre 
and duration constraint. 
The function should work as follows:
- Takes the all songs array and the filter object "filters" as arguments.
- Applies a filter to limit the songs to the given genre only.
- Then, apply a filter to limit the songs to the given duration and returns the filtered results.

Function Signature:
function filterSongs(songs: Array, filters: Array;
where Song class has the following attributes:
title: string
artist: string
genre: string
duration: number
The filter object is the following shape:

    {
    genre: string, // desired genre to filter on
    duration: number // minimum duration required to match
    }
*/

const songs = [
  { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
  { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
  { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    genre: "Pop",
    duration: 357,
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    duration: 354,
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    duration: 480,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    duration: 355,
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Rock",
    duration: 302,
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    genre: "Rock",
    duration: 390,
  },
  {
    title: "Thrash Unreal",
    artist: "Against Me!",
    genre: "Punk",
    duration: 292,
  },
  {
    title: "London Calling",
    artist: "The Clash",
    genre: "Punk",
    duration: 189,
  },
];

function filterSongs(songs, filters) {
  const { genre, duration } = filters;

  return songs.filter(
    (song) => song.genre === genre && song.duration >= duration
  );
}

const filters = { genre: "Rock", duration: 350 };
console.log(filterSongs(songs, filters));

/*
function filterSongs(songs, filters) {
  let newarray = songs.filter((song) => {
    return song.genre == filters.genre && song.duration >= filters.duration;
  });
  return newarray;
}*/
