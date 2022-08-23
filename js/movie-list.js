import Movie from "./movie.js";

export default class MovieList {
  constructor(stateManager) {
    this.stateManager = stateManager;
    this.stateManager.subscribe("clear-everything", this.clear.bind(this));
    this.stateManager.subscribe(
      "favorites-loaded",
      this.drawMovieToScreen.bind(this)
    );
    this.stateManager.subscribe(
      "movie-found",
      this.drawMovieToScreen.bind(this)
    );
    this.stateManager.subscribe("redraw", this.drawMovieToScreen.bind(this));
  }

  // this function should fire:
  // when server give back a movie result after they've click search
  drawMovieToScreen(movieDataList) {
    console.log(this.stateManager.showNotes);
    this.clear();
    //  the job of this method is to draw all  of the
    // movies to the screen

    const parentElement = document.querySelector(".movies");

    for (let i = 0; i < movieDataList.length; i++) {
      // create movie object
      const movie = new Movie(this.stateManager, movieDataList[i]);

      // get HTML representation from the movie data:
      

      // insert HTML representing a simple movie into the DOM:
      movie.attachMovieToDom(parentElement);
    }

    let buttonText = "Show Notes";
    if(this.stateManager.showNotes) {
        buttonText = "Hide Notes";
    }
    const buttonHTML = `<button class="pinkify" id="show_notes">${buttonText}</button>`;
    parentElement.insertAdjacentHTML("afterbegin",  buttonHTML);

    document.querySelector("#show_notes").addEventListener("click", this.toggleNotes.bind(this));
  }

  toggleNotes(ev) {
    ev.preventDefault();
    console.log(this.stateManager.showNotes)
        if(this.stateManager.showNotes) {
            // notify the state manager
            this.stateManager.notify("show-notes", false)

        } else {
            // notify state manager
            this.stateManager.notify("show-notes", true)

        }
        
  }

  clear () {
    document.querySelector('.movies').innerHTML = "";
}
}
