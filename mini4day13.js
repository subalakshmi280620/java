const searchBtn = document.getElementById('searchBtn');
const movieInput = document.getElementById('movieInput');
const movieResult = document.getElementById('movieResult');

// Replace with your OMDb API key
const API_KEY = 'YOUR_OMDB_API_KEY'; // Get one for free at https://www.omdbapi.com/apikey.aspx

searchBtn.addEventListener('click', fetchMovie);

async function fetchMovie() {
    const title = movieInput.value.trim();

    if (!title) {
        movieResult.innerHTML = `<p class="error">Please enter a movie title.</p>`;
        return;
    }

    try {
        movieResult.innerHTML = `<p>Loading...</p>`;
        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "False") {
            movieResult.innerHTML = `<p class="error">❌ Movie not found!</p>`;
            return;
        }

        displayMovie(data);
    } catch (error) {
        movieResult.innerHTML = `<p class="error">Error fetching data. Please try again.</p>`;
        console.error(error);
    }
}

function displayMovie(movie) {
    movieResult.innerHTML = `
    <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}" alt="${movie.Title}">
    <h2>${movie.Title}</h2>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
  `;
}
