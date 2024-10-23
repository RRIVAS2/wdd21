document.addEventListener('DOMContentLoaded', function() {
    const sidebarContainer = document.getElementById('sidebar-container');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    
    let message = '';

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysDiff} days ago.`;
        }
    }

    // Create a new element to display the message
    const messageElement = document.createElement('div');
    messageElement.classList.add('card');
    messageElement.innerHTML = `<h2>Welcome</h2><p>${message}</p>`;

    // Insert the message at the beginning of the sidebar
    sidebarContainer.insertBefore(messageElement, sidebarContainer.firstChild);

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', currentDate.getTime().toString());
});