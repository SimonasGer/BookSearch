// like funkcionalkumas su sirdelemis
// localStorage.clear()
console.log(localStorage)
import apiService from "./apiService.js";
import renderTemplate from "./renderTemplate.js";
import error from "./error.js"
const search = () => {
    document.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector("input").value;
        document.querySelector("input").value = ""
        let searchResponse;
        document.querySelector(".container").style.display = "none";
        apiService(searchTerm)
        .then(result => searchResponse = result)
        .then(() => {if (searchResponse.Poster == undefined){
            error();
        }else{
            renderTemplate()
            document.querySelector("img").src += searchResponse.Poster
            if (localStorage[searchResponse.Title] === undefined){
                localStorage.setItem(searchResponse.Title, 0);
            } else {
                document.querySelector("#heart").innerHTML += localStorage[searchResponse.Title]
            }
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
        .then(() => {
            document.querySelector("#heart").addEventListener("click", (e) => {
            e.preventDefault();
            let likes = localStorage[searchResponse.Title];
            likes++;
            console.log(localStorage[searchResponse.Title]);
            document.querySelector("#heart").style.color = "green";
            localStorage.setItem(searchResponse.Title, likes);
            document.querySelector("#heart").disabled = true;
            document.querySelector("#heart").innerHTML = `&#x2665;${likes}`;

        })})
        
    })
    
}

export default search;