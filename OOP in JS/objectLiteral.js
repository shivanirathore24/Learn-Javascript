/* Object Literal */

const movie = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },
  //   cast: ["Robert Downey Jr,Chris Evan"],
  getMovieDetails: function () {
    console.log(
      `Title: ${movie.title}\n Year: ${movie.year}\n Genre: ${movie.genre}\n Cast: ${movie.cast.main_lead} ${movie.cast.others}`
    );
  },

  getDetails: function (detail) {
    console.log(movie[detail]); //square-bracket notation
  },
};

//dot notation
console.log(movie.title); //The Avengers
movie.getMovieDetails();
// Title: The Avengers
// Year: 2012
// Genre: Action, Sci-Fi, Thriller
// Cast: Robert Downey Jr,Chris Evan

const detail = "year";
movie.getDetails(detail); //2012

console.log(movie.cast.main_lead); //Robert Downey Jr.
