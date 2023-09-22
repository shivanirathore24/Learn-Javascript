/* 'this' in Objects */

const movie2 = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },
  //ES6 concise method syntax to define methods in an object literal
  getMovieDetails() {
    console.log(
      `Title: ${this.title}
      Year: ${this.year} 
      Genre: ${this.genre}
      Cast: ${this.cast.main_lead} ${this.cast.others}`
    );
  },

  getDetails: function (detail) {
    console.log(movie[detail]); //square-bracket notation
  },
};

movie2.getMovieDetails();
/*
Title: The Avengers
      Year: 2012 
      Genre: Action, Sci-Fi, Thriller
      Cast: Robert Downey Jr. Chris Evans
      */
