const template = () => {
    return `
    <img>
    <h2 id="heart">&#x2665;</h2>
    <p class="mt-5" id="movieTitle">Title: </p>
    <p id="movieDate">Release date: </p>
    <p id="movieGenre">Genre: </p>
    <p id="movieTime">Runtime: </p>
    <p id="movieWriter">Writer: </p>
    <p id="movieDirector">Director: </p>
    <p id="movieActor">Actors: </p>
    <p id="movieLang">Language: </p>
    <p id="movieRating">Rating: </p>
    <p id="movieAwards">Awards: </p>
    <p>Plot: </p>
    <p id="moviePlot"></p>
    `
}

export default template