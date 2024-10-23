//Footer code
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = new Date().toLocaleDateString();


//Wayfinding code
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

//Search code   
const baseUrl = 'https://www.themuse.com/api/public/jobs';
const apiKey = '9638b32d3ac1be6ba87b32515d1fe0642de948234b7af6524170ed0ff3a59d1d';


document.getElementById('searchButton').addEventListener('click', searchJobs);

async function searchJobs() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = 'Searching...';

    console.log('Search Input:', searchInput);

    try {
        const url = `${baseUrl}?company=${encodeURIComponent(searchInput)}&title=${encodeURIComponent(searchInput)}&page=1&api_key=${apiKey}`;
        console.log('API Request URL:', url);

        const response = await fetch(url);
        
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        const data = await response.json();

        console.log('API Response:', data);
        console.log('Number of results:', data.results ? data.results.length : 'N/A');

        if (!data.results || data.results.length === 0) {
            resultsContainer.innerHTML = 'No results found. Try a different search term.';
            return;
        }

        resultsContainer.innerHTML = '';
        data.results.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <h2>${job.name}</h2>
                <p><strong>Company:</strong> ${job.company.name}</p>
                <p><strong>Location:</strong> ${job.locations.map(loc => loc.name).join(', ')}</p>
                <p><strong>Level:</strong> ${job.levels.map(level => level.name).join(', ')}</p>
                <a href="${job.refs.landing_page}" target="_blank">View Job</a>
            `;
            resultsContainer.appendChild(jobCard);
        });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        resultsContainer.innerHTML = `An error occurred while fetching jobs: ${error.message}. Please try again.`;
    }
}
