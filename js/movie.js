export default class Movie {
  constructor(stateManager, movieData) {
    this.stateManager = stateManager;
    this.movieData = movieData;
    // this.showNotes = false;
  }

  attachMovieToDom(parentElement) {
    const html = this.toHTML(this.movieData);
    console.log(html);
    parentElement.insertAdjacentHTML("beforeend", html);

    // attach an event handler to the /like button:
    const likeButtonSelector = `#like_${this.movieData.imdbID}`;
    console.log(likeButtonSelector);
    document
      .querySelector(likeButtonSelector)
      .addEventListener("click", this.like.bind(this));

    if ((this.stateManager.showNotes)) {
      // attach an event handler to the save button:
      const saveButtonSelector = `#save_${this.movieData.imdbID}`;
      console.log(saveButtonSelector);
        document.querySelector(saveButtonSelector).addEventListener("click", this.save.bind(this));
    }
  }

  toHTML(data) {
    // returns an HTML representation of the JSON data
    console.log(data);
    const movieTemplate = `
      <div>
      <h2> ${data.Title}</h2>
      <img src="${data.Poster}" class ="poster" alt= "poster picture" />
      <p> <strong> Plot: </strong></p>${data.Plot}</p>
      <p> <strong>Year: </strong>${data.Year}</p>
      <p> <strong>Released: </strong>${data.Released}</p>
      <p> <strong>Rating: </strong> ${data.Ratings[0].Source}: ${
      data.Ratings[0].Value
    }</p>
      <button class ="pinkify" id="like_${data.imdbID}">Like</button>
     </div>
     <div>

      ${this.getNotesForm()}
      </div> 
      `;

    return movieTemplate;
  }

  getNotesForm() {
    if (this.stateManager.showNotes) {
      return `
      <div>
      <label>Notes</label>
          <textarea id="comment_${this.movieData.imdbID}">${this.movieData.notes || ""}</textarea>
          <button id="save_${this.movieData.imdbID}">Save</button>
          </div>
      `;
    } else {
      return "";
    }
  }

  // showNotes () {
  //     this.showNotes = true
  // }

  // <p> <strong>Rating: </strong> ${data.Ratings[0].Source}: ${data.Ratings[0].Value}</p>
  // toHTML1(data) {
  //   // returns an HTML representation of the JSON data
  //   let movie = document.createElement("div");
  //   let imgCont = document.createElement("div");
  //   let imgTag = document.createElement("img");
  //   let movieID = document.createElement("p");
  //   let title = document.createElement("p");
  //   let year = document.createElement("p");
  //   let plot = document.createElement("p");
  //   title.setAttribute("id", "movie_title");
  //   year.setAttribute("id", "movie_year");
  //   plot.setAttribute("id", "movie_plot");
  //   imgTag.src = searchRes[i].Poster;
  //   imgTag.setAttribute("style", "width: 300px");
  //   imgTag.setAttribute("id", "movie_poster");

  //   title.textContent = `${movieObject.Title}`;

  //   movieID.textContent = `ID - ${movieObject.ID}`;
  //   year.textContent = `YEAR - ${movieObject.Year}`;
  //   plot.textContent = `DESCRIPTION: ${movieObject.Plot}`;

  //   imgCont.appendChild(imgTag);
  //   mainCon.appendChild(movie);
  //   movie.appendChild(title);
  //   movie.appendChild(movieID);
  //   movie.appendChild(year);
  //   movie.appendChild(imgCont);
  //   movie.appendChild(plot);

  //   title.style.textAlign = "center";
  //   title.style.fontSize = "2em";

  //   movieID.style.textAlign = "center";

  //   year.style.textAlign = "center";
  //   imgCont.style.textAlign = "center";

  //   let ratings = plotData.Ratings;

  //   for (let i = 0; i < ratings.length; i++) {
  //     console.log(`${ratings[i].Source} : ${ratings[i].Value}`);
  //     let maincon2 = document.getElementById("movie");
  //     let raiting = document.createElement("p");
  //     raiting.textContent = `RATING: ${ratings[i].Source} : ${ratings[i].Value}`;
  //     maincon2.appendChild(raiting);
  //     raiting.setAttribute("id", "movie_raiting");
  //     raiting.style.color = "#646cff";
  //     raiting.style.textAlign = "center";
  //   }
  //   return movie.innerHTML;
  // }

  like(ev) {
    // notifies the state manager that it would like to
    // save the movie to the DB
    console.log("Like: add this data to indexedDB!");
    this.stateManager.notify("like-requested", this.movieData);
  }

  save (ev) {
    // notifies the state manager that it would like to
    // save the movie to the DB
    console.log('Save: add comment to movie!');
    const notes = document.querySelector(`#comment_${this.movieData.imdbID}`).value;
    this.movieData.notes = notes;
    console.log(this.movieData);
    this.stateManager.notify('save-requested', this.movieData);
}

  saveComment() {
    // updates the comment after the user has added some notes
  }
}

// showNotes button on each movie
//  <button  id="show_${data.imdbID}">Show Notes</button>
