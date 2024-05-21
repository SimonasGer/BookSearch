const apiService = (term)=>{
    const url = "https://www.omdbapi.com/?t=";
    const key = "e4db3ced";
    return fetch(`${url}${term}&apikey=${key}`)
    .then(response => response.json())
}

export default apiService