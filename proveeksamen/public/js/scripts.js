document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();

        if (query) {
            try {
                const response = await fetch(`/api/reindeer/search?query=${encodeURIComponent(query)}`);
                const results = await response.json();

                displayResults(results);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        results.forEach(reindeer => {
            const reindeerElement = document.createElement('div');
            reindeerElement.classList.add('reindeer-result');
            reindeerElement.innerHTML = `
                <h3>${reindeer.name}</h3>
                <p>Flock: ${reindeer.flock}</p>
                <p>Birth Date: ${new Date(reindeer.birthDate).toLocaleDateString()}</p>
            `;
            resultsContainer.appendChild(reindeerElement);
        });
    }
});