import "../style.css";
// import apiKey from "./key";
import StateManager from "./state-manager.js";
import SearchForm from "./search-form.js";
// import Movie from "./movie.js";
import MovieList from "./movie-list.js";

// upper case ref to a class lwercase ref's to an instance of a class
const stateManager = new StateManager();

// Below, we're passing the state manager into the form
// so that the form can let the state manager knows
// when it's received search results;
const searchForm = new SearchForm(stateManager);
searchForm.drawForm();

const movieList = new MovieList(stateManager);


