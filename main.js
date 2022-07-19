import './style.css';
import {apiKey} from './key.js';

document.querySelector("#app").innerHTML = `
  <h1>Movie Search Database!</h1>
`

const search = (ev) => {
  ev.preventDefault();
  
  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value; 
  const plot = document.querySelector("#plot").value;
  const url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apikey=${apiKey}`;
  console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
   
    const parent = document.querySelector("#results-container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    const movieTemplate= `
    <div>
    <h2>${data.Title}</h2>
    <img src="${data.Poster}" alt= "poster picture" />
    <h6>${data.Plot}</h6>
    <h6>${data.Rating}</h6>
    <h6>${data.Release}</h6>
    <h6>${data.Year}</h6>
    </div>
    `
   
    // console.log(movieTemplate);
    document.querySelector("#results-container").insertAdjacentHTML("beforeend", movieTemplate);

    console.log(data.Title);
    console.log(data.Year);
    console.log(data.Poster);
    console.log(data.Plot);
    console.log(data.Rating);
    console.log(data.Release);
    console.log('-----------------');
  })
};

document.querySelector("form").addEventListener("submit", search);
  