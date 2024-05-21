import apiService from "./apiService.js";
import renderTemplate from "./renderTemplate.js";
import error from "./error.js"
const search = () => {
    document.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector("input").value;
        let searchResponse;
        apiService(searchTerm)
        .then(result => searchResponse = result)
        .then(() => {if (searchResponse.Poster == undefined){
            error();
        }else{
            renderTemplate()
            document.querySelector("img").src += searchResponse.Poster
            document.querySelector("#movieTitle").innerHTML += searchResponse.Title
            document.querySelector("#movieDate").innerHTML += searchResponse.Released
            document.querySelector("#movieGenre").innerHTML += searchResponse.Genre
            document.querySelector("#movieTime").innerHTML += searchResponse.Runtime
            document.querySelector("#movieWriter").innerHTML += searchResponse.Writer
            document.querySelector("#movieDirector").innerHTML += searchResponse.Director
            document.querySelector("#movieActor").innerHTML += searchResponse.Actors
            document.querySelector("#movieLang").innerHTML += searchResponse.Language
            document.querySelector("#movieAwards").innerHTML += searchResponse.Awards
            document.querySelector("#movieRating").innerHTML += searchResponse.imdbRating
            document.querySelector("#moviePlot").innerHTML += searchResponse.Plot
        }})
        .then(() => document.querySelector("button").disabled = true)
        
    })
}

export default search;