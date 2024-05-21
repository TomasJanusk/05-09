import ajaxService from "./ajaxService";
 
const createMovieCard = (movie) => {
    return `
        <div class="card mt-3">
            <div class="card-header">
                <h2>${movie.Title}</h2>
            </div>
            <div class="card-body">
                <img src="${movie.Poster}" alt="${movie.Title} Poster" class="img-fluid mb-3"/>
                <p><strong>Writer:</strong> ${movie.Writer}</p>
                <p><strong>Awards:</strong> ${movie.Awards}</p>
                <p><strong>Runtime:</strong> ${movie.Runtime}</p>
                <p><strong>imDB Rating:</strong> ${movie.imdbRating}</p>
                <p><strong>Release Date:</strong> ${movie.Released}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
            </div>
        </div>
    `;
}
 
const searchCode = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => {
                searchResponse = result;
                if (searchResponse.Response === "False") {
                    document.querySelector('.error-message').style.display = 'block';
                } else {
                    document.querySelector('.error-message').style.display = 'none';
                    const movieCardHTML = createMovieCard(searchResponse);
                    document.querySelector('.result').innerHTML = movieCardHTML;
                }
            });
    });
}
export default searchCode;