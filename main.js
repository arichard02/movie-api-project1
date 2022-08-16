import "./style.css";
import { apiKey } from "./key.js";

const app = document.querySelector("#app");

document.querySelector("#app").innerHTML = `
  <h1>Movie Search Database</h1>
`;

const search = (ev) => {
  ev.preventDefault();

  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;
  const plot = document.querySelector("#plot").value;
  // building the search que
  const url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apikey=${apiKey}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // clears data for new search
      const parent = document.querySelector("#results-container");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }

      // shows what information get displayed
      const movieTemplate = `
    <div>
      <h2> ${data.Title}</h2>
      <img src="${data.Poster}" alt= "poster picture" />
      <p> <strong> Plot: </strong></p>${data.Plot}</p>
      <p> <strong>Year: </strong>${data.Year}</p>
      <p> <strong>Rating: </strong> ${data.Ratings[0].Source}: ${data.Ratings[0].Value}</p>
      <p> <strong>Released: </strong>${data.Released}</p>
    </div>
    `;

      document
        .querySelector("#results-container")
        .insertAdjacentHTML("beforeend", movieTemplate);

      console.log(data.Title);
      console.log(data.Year);
      console.log(data.Poster);
      console.log(data.Plot);
      console.log(data.Ratings[0].source);
      console.log(data.Released);
      console.log("-----------------");
    });
};

document.querySelector("form").addEventListener("submit", search);