import api from './modules/api';
import storage from './modules/storage';
import ui from './modules/ui';




document.addEventListener('DOMContentLoaded', async () => {
    const categories = await api.fetchCategories();
    ui.displayCategories(categories);

    const searchForm = document.getElementById('search-form');
    const categorySelect = document.getElementById('category-select');
    const searchInput = document.getElementById('search-input');
    const jokesContainer = document.getElementById('jokes');
    const savedJokesContainer = document.getElementById('saved-jokes');
    const homeLink = document.getElementById('home-link');
    const jokesLink = document.getElementById('jokes-link');
    const homePage = document.getElementById('home');
    const jokeListPage = document.getElementById('joke-list');

    categorySelect.addEventListener('change', () => {
        if (categorySelect.value) {
            searchInput.value = '';
            searchInput.disabled = true;
        } else {
            searchInput.disabled = false;
        }
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value) {
            categorySelect.disabled = true;
        } else {
            categorySelect.disabled = false;
        }
    });

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let jokes;
        if (searchInput.value) {
            jokes = await api.fetchJokesBySearch(searchInput.value);
            jokes = jokes.result;
        } else if (categorySelect.value) {
            jokes = [await api.fetchJokesByCategory(categorySelect.value)];
        }
        ui.displayJokes(jokes);
    });

    jokesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('joke__save')) {
            const joke = JSON.parse(e.target.dataset.joke);
            storage.saveJoke(joke);
        }
    });

    homeLink.addEventListener('click', () => {
        homePage.style.display = 'block';
        jokeListPage.style.display = 'none';
    });

    jokesLink.addEventListener('click', () => {
        homePage.style.display = 'none';
        jokeListPage.style.display = 'block';
        const savedJokes = storage.getSavedJokes();
        ui.displaySavedJokes(savedJokes);
    });
});
// localStorage.clear()