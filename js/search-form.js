import  apiKey  from "./key.js";
export default class SearchForm {

  constructor(stateManager) {
    this.stateManager = stateManager; 
    // conv var so this can used later

    }

    drawForm() {
        // the job of this method is to diplay the form to HTML
        const formTemplate = `

      <form>
        <label class="control-label" for="title">Title:</label>
        <input type="text" placeholder="Search.." id="movie_search" required />
    
        <br />
        <br />
    
        <label class="control-label" for="year">Year:</label>
        <input type="number" placeholder="Year" minlength="4" maxlength="4" id="year"/>
    
        <br />
        <br />
    
        <label class="control-label" for="plot">Plot:</label>
        <select name="plot" id="plot" style="width: 65px">
          <option value="short">Short</option>
          <option value="full">Full</option>
        </select>
       
        <br />
        <br />
    
        <button id="go"  type="submit" class="pinkify">Submit</button>
        <button id="reset"  class="pinkify">Reset</button>
        <button id="show-favorites"  class="pinkify">Favorites</button>
        <!-- <input type="checkbox" id="round" name="round">
        <span class="sliderround"></span> -->
    
    
      </form>
      `;
      document.querySelector(".form-container").innerHTML = formTemplate;
      document.querySelector("form").addEventListener("submit", this.search.bind(this));
      document.querySelector("#reset").addEventListener("click", this.clearScreen.bind(this));
      document.querySelector("#show-favorites").addEventListener("click", this.loadFavorites.bind(this));
    }
// adding prevent default when user click 
// would use fetch method here
    async search(ev) {
        // the job of this method is to send the searh to the cloud (IM)
        ev.preventDefault();
        console.log("Search!");

        // const apiKey = "ef5fab25";
        const inputVal = document.getElementById("movie_search").value;
        const resp = await fetch(
        `https://www.omdbapi.com/?t=${inputVal}&plot=short&apikey=${apiKey}`
      );
        const data = await resp.json();
        console.log(data);
        

          this.stateManager.notify("movie-found", [data]);
        }

        clearScreen(ev) {
          ev.preventDefault();
          document.querySelector("#movie_search").value = "";
          document.querySelector("#year").value = "";

          this.stateManager.notify("clear-everything");
        }

        loadFavorites(ev) {
          ev.preventDefault();
          this.stateManager.loadFavorites();
        }
     
    displayResults() {
        // the job of this method is to display the movie once the
        // response comes back from the cloud
    }
}
