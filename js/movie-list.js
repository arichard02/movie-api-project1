import Movie from "./movie.js"

export default class MovieList {

    constructor(stateManager) {
        this.stateManager = stateManager;
        this.stateManager.subscribe("movie-found", this.drawMovieToScreen.bind(this));
    }

    // this function should fire:
        // when server give back a movie result after they've click search
    drawMovieToScreen(movieDataList) {
        console.log(movieDataList);
//  the job of this method is to draw all  of the 
// movies to the screen

for (let i = 0; i < movieDataList.length; i++) {
    // create movie object
    const movie = new Movie(this.stateManager, movieDataList[i]);

    // get HTML representation from the movie data:
    const parentElement = document.querySelector(".movies");

    // insert HTML representing a simple movie into the DOM:
   movie.attachMovieToDom(parentElement);
}
    }
}