import "../style.css";
import { apiKey } from "./key.js";
import StateManager from "./state-manager.js";
import SearchForm from "./search-form.js"
import Movie from "./movie";


const searchForm = new SearchForm();
searchForm.drawForm();

// import { database } from "./indexed";


// class Store {
//   constructor(init) {
//     const self = this;

//     this.subscribers = [];
//     database.then(async (db) => {
//       this.db = db;
//       const movie = await db.get("moviesToStore", "movie");
//       const favmovie = await db.get("FavmoviesToStore", "favmovie");

//       if (movie) {
//         for (const [key, value] of Object.entries(movie)) this.set(key, value);
//       }
//       if (favmovie) {
//         for (const [key, value] of Object.entries(favmovie))
//           this.set(key, value);
//       }
//     });
//     this.state = new Proxy(init, {
//       async set(state, key, value) {
//         state[key] = value;

//         if (self.db) {
//           console.log(self.db);

//           await self.db.add("moviesToStore", value[value.length - 1]);

//           await self.db.add("FavmoviesToStore", value[value.length - 1]);
//         }
//         console.log(self.subscribers);
//         self.subscribers.forEach((subscriber) => subscriber(state));

//         console.log("this is the set method");
//       },
//     });
//   }
//   subscribe(cb) {
//     if (typeof cb !== "function") {
//       throw new Error("You must subscribe with a function");
//     }
//     this.subscribers.push(cb);
//   }

//   addMovie(state, value) {
//     let newState = state.movies.push(value);

//     console.log(value);
//     console.log(newState);

//     this.state = Object.assign(this.state, state);

//     console.log(this.state);
//   }

//   getAllMovies() {
//     return this.state.movies;
//   }
//   addFavMovie(state, favValue) {
//     let newFavState = state.favMovies.push(favValue);

//     console.log(favValue);
//     console.log(newFavState);

//     console.log(this.state.favMovies);

//     this.state = Object.assign(this.state, state);

//     console.log(this.state);
//   }
//   getAllFavMovies() {
//     return this.state.favMovies;
//   }
// }
// const store = new Store({ movies: [] });
// const favstore = new Store({ favMovies: [] });
// console.log(favstore);
// console.log(store.state.movies);

// store.subscribe((state) => {
//   console.log(state);
//   let movieState = state.movies;
//   console.log("this is movie state", movieState);
//   movieState.forEach((subMovies) => document.body.appendChild(subMovies));

//   let favMovieState = state.favMovies;
//   favMovieState.forEach((subFavMovies) =>
//     document.body.appendChild(subFavMovies)
//   );
// });

// class Movies extends HTMLElement {
//   constructor() {
//     super();
//     this.title = "";
//     this.year = "";
//     this.plot = "";
//   }
//   static get observedAttributes() {
//     return ["title", "year", "plot"];
//   }
//   attributeChangedCallback(attributeName, oldValue, newValue) {
//     if (oldValue === newValue) return;
//     this[attributeName] = newValue;
//   }
// }

// window.customElements.define("movie-component", Movies);

// export async function getData(inputVal, plotLen) {
//   const apiKey = "ef5fab25";
//   const resp = await fetch(
//     `https://www.omdbapi.com/?s=${inputVal}&plot=short&apikey=${apiKey}`
//   );
//   const data = await resp.json();
//   console.log(data);
//   let searchRes = data.Search;
//   console.log(searchRes);

//   for (let i = 0; i < searchRes.length; i++) {
//     const plotUrl = `https://www.omdbapi.com/?t=${searchRes[i].Title}&plot=${plotLen}&apikey=${apiKey}`;

//     const plotResp = await fetch(`${plotUrl}`);
//     const plotData = await plotResp.json();

//     console.log(plotData);

//     let raitingData = plotData.Ratings;
//     let movieObject = {
//       Title: searchRes[i].Title,
//       Year: searchRes[i].Year,
//       ID: searchRes[i].imdbID,
//       Plot: plotData.Plot,
//       Poster: searchRes[i].Poster,
//       Rating: raitingData,
//     };

//     let mainCon = document.getElementById("movie");
//     let movie = document.createElement("div");
//     let imgCont = document.createElement("div");
//     let imgTag = document.createElement("img");
//     let movieID = document.createElement("p");
//     let title = document.createElement("p");
//     let year = document.createElement("p");
//     let plot = document.createElement("p");
//     title.setAttribute("id", "movie_title");
//     year.setAttribute("id", "movie_year");
//     plot.setAttribute("id", "movie_plot");
//     imgTag.src = searchRes[i].Poster;
//     imgTag.setAttribute("style", "width: 300px");
//     imgTag.setAttribute("id", "movie_poster");

//     title.textContent = `${movieObject.Title}`;

//     movieID.textContent = `ID - ${movieObject.ID}`;
//     year.textContent = `YEAR - ${movieObject.Year}`;
//     plot.textContent = `DESCRIPTION: ${movieObject.Plot}`;

//     imgCont.appendChild(imgTag);
//     mainCon.appendChild(movie);
//     movie.appendChild(title);
//     movie.appendChild(movieID);
//     movie.appendChild(year);
//     movie.appendChild(imgCont);
//     movie.appendChild(plot);

//     title.style.textAlign = "center";
//     title.style.fontSize = "2em";

//     movieID.style.textAlign = "center";

//     year.style.textAlign = "center";
//     imgCont.style.textAlign = "center";

//     let ratings = plotData.Ratings;

//     for (let i = 0; i < ratings.length; i++) {
//       console.log(`${ratings[i].Source} : ${ratings[i].Value}`);
//       let maincon2 = document.getElementById("movie");
//       let raiting = document.createElement("p");
//       raiting.textContent = `RATING: ${ratings[i].Source} : ${ratings[i].Value}`;
//       maincon2.appendChild(raiting);
//       raiting.setAttribute("id", "movie_raiting");
//       raiting.style.color = "#646cff";
//       raiting.style.textAlign = "center";
//     }

//     let favButton = document.createElement("button");
//     favButton.innerText = "Favorite <3";
//     mainCon.appendChild(favButton);

//     favButton.addEventListener("click", (e) => {
//       let favMovieContainer = document.createElement("div");
//       favMovieContainer.setAttribute("id", "fav_movie");
//       mainCon.appendChild(favMovieContainer);

//       let favmovieObject = {
//         Title: searchRes[i].Title,
//         Year: searchRes[i].Year,
//         Plot: plotData.Plot,
//         Poster: searchRes[i].Poster,
//         Rating: raitingData,
//       };
//       let favratings = plotData.Ratings;

//       for (let i = 0; i < favratings.length; i++) {
//         console.log(`${favratings[i].Source} : ${favratings[i].Value}`);
//         let favraiting = document.createElement("p");
//         favraiting.textContent = `RATING: ${favratings[i].Source} : ${favratings[i].Value}`;
//         favMovieContainer.appendChild(favraiting);
//         favraiting.setAttribute("id", "movie_raiting");
//         favraiting.style.color = "#646cff";
//         favraiting.style.textAlign = "center";
//       }

//       let favTitle = document.createTextNode(favmovieObject.Title);
//       let favYear = document.createTextNode(favmovieObject.Year);
//       let favPlot = document.createTextNode(favmovieObject.Plot);
//       let favPoster = document.createElement("img");
//       favPoster.src = favmovieObject.Poster;

//       favMovieContainer.appendChild(favTitle);
//       favMovieContainer.appendChild(favYear);
//       favMovieContainer.appendChild(favPlot);
//       favMovieContainer.appendChild(favPoster);
//       // favMovieContainer.appendChild(favraiting)

//       favstore.addFavMovie(favstore.state, favMovieContainer);
//     });

//     let notesButton = document.createElement("button");
//     notesButton.innerText = "Add A Note";
//     mainCon.appendChild(notesButton);

//     notesButton.addEventListener("click", (e) => {
//       let notesDiv = document.createElement("div");
//       let notesInput = document.createElement("textarea");
//       notesInput.setAttribute("rows", "15");
//       notesInput.setAttribute("cols", "35");
//       notesInput.setAttribute("id", "notes");
//       let addNote = document.createElement("button");
//       addNote.innerText = "Submit";

//       // let notesVal = document.getElementById("notes").value
//       // console.log(notesVal)
//       notesDiv.appendChild(notesInput);
//       notesDiv.appendChild(addNote);

//       mainCon.appendChild(notesDiv);
//     });

//     console.log("this is movie obj --", movieObject);
//     store.addMovie(store.state, movieObject);
//   }
// }

// const button = document.getElementById("button");
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   const inputVal = document.getElementById("movie_search").value;

//   const plot = document.querySelector("#plot");
//   console.log(plot);
//   const plotLen = plot.value;
//   console.log(`this is plot lenth 3: ${plotLen}`);
//   getData(inputVal, plotLen);
//   console.log("this is datttttaaaa", { getData });
// });











// // import "./style.css";
// // import { apiKey } from "./key.js";

// // const app = document.querySelector("#app");

// // document.querySelector("#app").innerHTML = `
// //   <h1>Movie Search Database</h1>
// // `;

// // const search = (ev) => {
// //   ev.preventDefault();

// //   const title = document.querySelector("#title").value;
// //   const year = document.querySelector("#year").value;
// //   const plot = document.querySelector("#plot").value;
// //   // building the search que
// //   const url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apikey=${apiKey}`;
// //   console.log(url);

// //   fetch(url)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log(data);

// //       // clears data for new search
// //       const parent = document.querySelector("#results-container");
// //       while (parent.firstChild) {
// //         parent.removeChild(parent.firstChild);
// //       }

// //       // shows what information get displayed
// //       const movieTemplate = `
// //     <div>
// //       <h2> ${data.Title}</h2>
// //       <img src="${data.Poster}" alt= "poster picture" />
// //       <p> <strong> Plot: </strong></p>${data.Plot}</p>
// //       <p> <strong>Year: </strong>${data.Year}</p>
// //       <p> <strong>Rating: </strong> ${data.Ratings[0].Source}: ${data.Ratings[0].Value}</p>
// //       <p> <strong>Released: </strong>${data.Released}</p>
// //     </div>
// //     `;

// //       document
// //         .querySelector("#results-container")
// //         .insertAdjacentHTML("beforeend", movieTemplate);

// //       console.log(data.Title);
// //       console.log(data.Year);
// //       console.log(data.Poster);
// //       console.log(data.Plot);
// //       console.log(data.Ratings[0].source);
// //       console.log(data.Released);
// //       console.log("-----------------");
// //     });
// // };

// // document.querySelector("form").addEventListener("submit", search);