function displayCategories(categories) {
    const categorySelect = document.getElementById('category-select');
    categorySelect.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
}

function displayJokes(jokes) {
    const jokesContainer = document.getElementById('jokes');
    jokesContainer.innerHTML = jokes.map(joke => `
        <div class="joke">
            <div class="joke__text">${joke.value}</div>
            <button class="joke__save" data-joke='${JSON.stringify(joke)}'>Save</button>
        </div>
    `).join('');
}

function displaySavedJokes(jokes) {
    const savedJokesContainer = document.getElementById('saved-jokes');
    savedJokesContainer.innerHTML = jokes.map(joke => `
        <div class="joke">
            <div class="joke__text">${joke.value}</div>
        </div>
    `).join('');
}

export default {
    displayCategories,
    displayJokes,
    displaySavedJokes
};
