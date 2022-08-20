export default class SearchForm {
    constructor() {



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
        <input type="number" placeholder="Year" minlength="4" maxlength="4" id="year" required="required" />
    
        <br />
        <br />
    
        <label class="control-label" for="plot">Plot:</label>
        <select name="plot" id="plot" style="width: 65px">
          <option value="short">Short</option>
          <option value="full">Full</option>
        </select>
       
        <br />
        <br />
    
        <button id="button" type="submit">Go</button>
        <button id="favbutton" type="click">Favorites</button>
        <!-- <input type="checkbox" id="round" name="round">
        <span class="sliderround"></span> -->
    
    
      </form>
      `;
      document.querySelector(".form-container").innerHTML = formTemplate;
      document.querySelector("form").addEventListener("submit", this.search);
    }

    search() {
        // the job of this method is to send the searh to the cloud (IM)
        console.log("Search!");
    }

    displayResults() {
        // the job of this method is to display the movie once the
        // response comes back from the cloud
    }
}
