async function fetchCategories() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function fetchJokesByCategory(category) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        if (!response.ok) throw new Error('Failed to fetch jokes by category');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function fetchJokesBySearch(query) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        if (!response.ok) throw new Error('Failed to fetch jokes by search');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export default {
    fetchCategories,
    fetchJokesByCategory,
    fetchJokesBySearch
};
