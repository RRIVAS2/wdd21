



const baseUrl = 'https://www.themuse.com/api/public/jobs';
const apiKey = '9638b32d3ac1be6ba87b32515d1fe0642de948234b7af6524170ed0ff3a59d1d';

async function fetchFeaturedJobs() {
    const requestUrl = `${baseUrl}?apiKey=${apiKey}&page=1&location=Remote`;
    console.log('Request URL:', requestUrl);
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Error response body:', errorBody);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the entire fetched data

        // Access the jobs from the 'results' property
        const jobs = data.results; // Fallback to an empty array if not found


        const featuredJobs = getRandomJobs(jobs, 15);
        displayJobs(featuredJobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}

function getRandomJobs(jobs, count) {
    const shuffled = jobs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayJobs(jobs) {
    const jobCardsContainer = document.getElementById('jobCards');
    jobCardsContainer.innerHTML = jobs.map(job => `
        <div class="job-card">
            <h3>${job.name}</h3>
            <p>${job.company.name}</p>
            <p>${job.locations.map(location => location.name).join(', ')}</p>
            <button class="openButton">More Info</button>
            <dialog class="dialogBox">
                <h4>${job.name}</h4>
                <p>Company: ${job.company.name}</p>
                <p>Location: ${job.locations.map(location => location.name).join(', ')}</p>
                <p>Level: ${job.levels[0].name}</p>
                <p>Category: ${job.categories.length > 0 ? job.categories[0].name : 'N/A'}</p>
                <p>Publication date: ${job.publication_date}</p>
                <a href="${job.refs.landing_page}" class="applyButton">Apply Now</a>
                <button class="closeButton">Close</button>
            </dialog>   
        </div>
    `).join('');

        // Select all open buttons and close buttons
    const openButtons = document.querySelectorAll(".openButton");
    const closeButtons = document.querySelectorAll(".closeButton");
    const dialogBoxes = document.querySelectorAll(".dialogBox");

    // Add event listeners to each open button
    openButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            dialogBoxes[index].showModal();
        });
    });

    // Add event listeners to each close button
    closeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            dialogBoxes[index].close();
        });
    });
}



// Call the function to fetch and display jobs
fetchFeaturedJobs();
