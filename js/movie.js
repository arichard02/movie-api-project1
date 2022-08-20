export default class Movie {
    constructor() {}
  
    toHTML(data) {
      // returns an HTML representation of the JSON data
      let movie = document.createElement("div");
      let imgCont = document.createElement("div");
      let imgTag = document.createElement("img");
      let movieID = document.createElement("p");
      let title = document.createElement("p");
      let year = document.createElement("p");
      let plot = document.createElement("p");
      title.setAttribute("id", "movie_title");
      year.setAttribute("id", "movie_year");
      plot.setAttribute("id", "movie_plot");
      imgTag.src = searchRes[i].Poster;
      imgTag.setAttribute("style", "width: 300px");
      imgTag.setAttribute("id", "movie_poster");
  
      title.textContent = `${movieObject.Title}`;
  
      movieID.textContent = `ID - ${movieObject.ID}`;
      year.textContent = `YEAR - ${movieObject.Year}`;
      plot.textContent = `DESCRIPTION: ${movieObject.Plot}`;
  
      imgCont.appendChild(imgTag);
      mainCon.appendChild(movie);
      movie.appendChild(title);
      movie.appendChild(movieID);
      movie.appendChild(year);
      movie.appendChild(imgCont);
      movie.appendChild(plot);
  
      title.style.textAlign = "center";
      title.style.fontSize = "2em";
  
      movieID.style.textAlign = "center";
  
      year.style.textAlign = "center";
      imgCont.style.textAlign = "center";
  
      let ratings = plotData.Ratings;
  
      for (let i = 0; i < ratings.length; i++) {
        console.log(`${ratings[i].Source} : ${ratings[i].Value}`);
        let maincon2 = document.getElementById("movie");
        let raiting = document.createElement("p");
        raiting.textContent = `RATING: ${ratings[i].Source} : ${ratings[i].Value}`;
        maincon2.appendChild(raiting);
        raiting.setAttribute("id", "movie_raiting");
        raiting.style.color = "#646cff";
        raiting.style.textAlign = "center";
      }
      return movie.innerHTML;
  
    }
  
    like() {
      // notifies the state manager that it would like to
      // save the movie to the DB
    }

    saveComment () {
        // updates the comment after the user has added some notes



    }
  }
  