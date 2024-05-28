function saveJoke(joke) {
    let jokes = JSON.parse(localStorage.getItem('savedJokes')) || [];
    jokes.push(joke);
    localStorage.setItem('savedJokes', JSON.stringify(jokes));
}

function getSavedJokes() {
    return JSON.parse(localStorage.getItem('savedJokes')) || [];
}

export default {
    saveJoke,
    getSavedJokes
};
