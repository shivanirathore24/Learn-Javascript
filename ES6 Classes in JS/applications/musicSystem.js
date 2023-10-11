/* 
MUSIC SYSTEM
Suppose you are building a music streaming application that allows users to listen to different types of music.
You want to create a class hierarchy to represent the different types of music available for streaming.

Objective:
Create a class hierarchy with the following classes:
-Media (base class) 
Song (inherits from Media)  
PopSong (inherits from Song)  
RockSong (inherits from Song)
Podcast (inherits from Media)
NewsPodcast (inherits from Podcast)
ComedyPodcast (inherits from Podcast)

The Media class should have the following properties:
   -title (string)
   -artist (string)
   - duration (number)
The Media class should also have the following methods:
   - getTitle() - returns the title of the media
   - getArtist() - returns the artist of the media
   - getDuration() - returns the duration of the media

The Song class should have the following additional properties:
   - album (string)
   - genre (string)
The Song class should also have the following additional methods:
   - getAlbum() - returns the album of the song
   - getGenre() - returns the genre of the song

The Podcast class should have the following additional properties:
   - host (string)
   - topic (string)
The Podcast class should also have the following additional methods:
   - getHost() - returns the host of the podcast
   -  getTopic() - returns the topic of the podcast

The PopSong class should have the following additional properties:
   - danceability (number)
   - energy (number)
The PopSong class should also have the following additional methods:
   - getDanceability() - returns the danceability of the pop song
   - getEnergy() - returns the energy of the pop song

The RockSong class should have the following additional properties:
   - distortion (number)
   - tempo (number)
The RockSong class should also have the following additional methods:
   - getDistortion() - returns the distortion of the rock song
   - getTempo() - returns the tempo of the rock song

The NewsPodcast class should have the following additional properties:
   - source (string)
   - rating (number)
The NewsPodcast class should also have the following additional methods:
   - getSource() - returns the source of the news podcast
   - getDuration() - returns the duration of the news podcast

The ComedyPodcast class should have the following additional properties:
   - comedian (string)
   - rating (number)
The ComedyPodcast class should also have the following additional methods:
   - getComedian() - returns the comedian of the comedy podcast
   - getRating() - returns the rating of the comedy podcast.

Note: - Each object should be able to access its parent properties and methods.
- Your code will be evaluated on this basis only.
*/

function main() {
  class Media {
    title;
    artist;
    duration;

    constructor(title, artist, duration) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
    }

    getTitle() {
      return this.title;
    }

    getArtist() {
      return this.artist;
    }

    getDuration() {
      return this.duration;
    }
  }

  class Song extends Media {
    album;
    genre;

    constructor(title, artist, duration, album, genre) {
      super(title, artist, duration);
      this.album = album;
      this.genre = genre;
    }

    getAlbum() {
      return this.album;
    }

    getGenre() {
      return this.genre;
    }
  }

  class PopSong extends Song {
    danceability;
    energy;

    constructor(title, artist, duration, album, genre, danceability, energy) {
      super(title, artist, duration, album, genre);
      this.danceability = danceability;
      this.energy = energy;
    }

    getDanceability() {
      return this.danceability;
    }

    getEnergy() {
      return this.energy;
    }
  }

  class RockSong extends Song {
    distortion;
    tempo;

    constructor(title, artist, duration, album, genre, distortion, tempo) {
      super(title, artist, duration, album, genre);
      this.distortion = distortion;
      this.tempo = tempo;
    }

    getDistortion() {
      return this.distortion;
    }

    getTempo() {
      return this.tempo;
    }
  }

  class Podcast extends Media {
    host;
    topic;

    constructor(title, artist, duration, host, topic) {
      super(title, artist, duration);
      this.host = host;
      this.topic = topic;
    }

    getHost() {
      return this.host;
    }

    getTopic() {
      return this.topic;
    }
  }

  class NewsPodcast extends Podcast {
    source;

    constructor(title, artist, duration, host, topic, source) {
      super(title, artist, duration, host, topic);
      this.source = source;
    }
    getSource() {
      return this.source;
    }

    getDuration() {
      return super.getDuration();
    }
  }

  class ComedyPodcast extends Podcast {
    comedian;
    rating;

    constructor(title, artist, duration, host, topic, comedian, rating) {
      super(title, artist, duration, host, topic);
      this.comedian = comedian;
      this.rating = rating;
    }

    getComedian() {
      return this.comedian;
    }

    getRating() {
      return this.rating;
    }
  }

  const popSong = new PopSong(
    "Shape of You",
    "Ed Sheeran",
    235,
    "÷",
    "Pop",
    0.825,
    0.652
  );
  console.log(popSong.getTitle()); // should output 'Shape of You'
  console.log(popSong.getArtist()); // should output 'Ed Sheeran'
  console.log(popSong.getDuration()); // should output 235

  console.log(popSong.getAlbum()); // should output '÷'
  console.log(popSong.getGenre()); // should output 'Pop'
  console.log(popSong.getDanceability()); // should output 0.825
  console.log(popSong.getEnergy()); // should output 0.652

  const rockSong = new RockSong(
    "Stairway to Heaven",
    "Led Zeppelin",
    482,
    "Led Zeppelin IV",
    "Rock",
    0.056,
    63.5
  );
  console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
  console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
  console.log(rockSong.getDuration()); // should output 482
  console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
  console.log(rockSong.getGenre()); // should output 'Rock'
  console.log(rockSong.getDistortion()); // should output 0.056
  console.log(rockSong.getTempo()); // should output 63.5

  const newsPodcast = new NewsPodcast(
    "The Daily",
    "The New York Times",
    30,
    "Michael Barbaro",
    "News",
    "The New York Times"
  );
  console.log(newsPodcast.getTitle()); // should
  // output 'The Daily'
  console.log(newsPodcast.getArtist()); // should output 'The New York Times'
  console.log(newsPodcast.getDuration()); // should output 30
  console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
  console.log(newsPodcast.getTopic()); // should output 'News'
  console.log(newsPodcast.getSource()); // should output 'The New York Times'

  const comedyPodcast = new ComedyPodcast(
    "My Favorite Murder",
    "Karen Kilgariff and Georgia Hardstark",
    60,
    "Karen Kilgariff and Georgia Hardstark",
    "Comedy",
    "Karen Kilgariff and Georgia Hardstark",
    4.8
  );
  console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
  console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
  console.log(comedyPodcast.getDuration()); // should output 60
  console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
  console.log(comedyPodcast.getTopic()); // should output 'Comedy'
  console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'

  console.log(comedyPodcast.getRating()); // should output 4.8
  return {
    Media,
    Song,
    Podcast,
    PopSong,
    RockSong,
    NewsPodcast,
    ComedyPodcast,
  };
}

main();
