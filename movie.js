class Movie extends HTMLElement {
    constructor() {
      super();
    }
    
     connectedCallback() {
      this.innerHTML = `
        <div>
      <h2> ${this.getAttribute("title")}</h2>
      <img src="${this.getAttribute("poster")}" alt= "poster picture" />
      <p> <strong> Plot: </strong></p>${this.getAttribute("plot")}</p>
      <p> <strong>Year: </strong>${this.getAttribute("year")}</p>
      <p> <strong>Rating: </strong> ${this.getAttribute("source")}: ${this.getAttribute("rating")}</p>
      <p> <strong>Released: </strong>${this.getAttribute("released")}</p>
    </div>
        `;
      }
  }
  
  // custome-elements.define takes two arguments 
  // 1. what you want the name of the tag to be
  // 2. class you want to use to control that tag
  // we run in html  (on line 54) 
  customElements.define('movie-display', Movie);


//   <section class="movie">
//         <p>${this.getAttribute("title")}</p>
//         <p>${this.getAttribute("year")}</p>
//         <p>${this.getAttribute("rating")}</p>
//         </section>